import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { ILoanAccount } from 'app/shared/model/loanservice/loan-account.model';
import { LoanAccountService } from './loan-account.service';

@Component({
    selector: 'ifris-loan-account-update',
    templateUrl: './loan-account-update.component.html'
})
export class LoanAccountUpdateComponent implements OnInit {
    loanAccount: ILoanAccount;
    isSaving: boolean;
    openingDateDp: any;
    expiryDateDp: any;
    appraisalMonthDp: any;

    constructor(protected loanAccountService: LoanAccountService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ loanAccount }) => {
            this.loanAccount = loanAccount;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.loanAccount.id !== undefined) {
            this.subscribeToSaveResponse(this.loanAccountService.update(this.loanAccount));
        } else {
            this.subscribeToSaveResponse(this.loanAccountService.create(this.loanAccount));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ILoanAccount>>) {
        result.subscribe((res: HttpResponse<ILoanAccount>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
