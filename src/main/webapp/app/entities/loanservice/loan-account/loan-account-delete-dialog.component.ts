import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ILoanAccount } from 'app/shared/model/loanservice/loan-account.model';
import { LoanAccountService } from './loan-account.service';

@Component({
    selector: 'ifris-loan-account-delete-dialog',
    templateUrl: './loan-account-delete-dialog.component.html'
})
export class LoanAccountDeleteDialogComponent {
    loanAccount: ILoanAccount;

    constructor(
        protected loanAccountService: LoanAccountService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.loanAccountService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'loanAccountListModification',
                content: 'Deleted an loanAccount'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'ifris-loan-account-delete-popup',
    template: ''
})
export class LoanAccountDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ loanAccount }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(LoanAccountDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.loanAccount = loanAccount;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/loan-account', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/loan-account', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
