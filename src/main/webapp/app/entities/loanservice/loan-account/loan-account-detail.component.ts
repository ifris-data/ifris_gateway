import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILoanAccount } from 'app/shared/model/loanservice/loan-account.model';

@Component({
    selector: 'ifris-loan-account-detail',
    templateUrl: './loan-account-detail.component.html'
})
export class LoanAccountDetailComponent implements OnInit {
    loanAccount: ILoanAccount;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ loanAccount }) => {
            this.loanAccount = loanAccount;
        });
    }

    previousState() {
        window.history.back();
    }
}
