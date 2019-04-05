import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoanAccount } from 'app/shared/model/loanservice/loan-account.model';
import { LoanAccountService } from './loan-account.service';
import { LoanAccountComponent } from './loan-account.component';
import { LoanAccountDetailComponent } from './loan-account-detail.component';
import { LoanAccountUpdateComponent } from './loan-account-update.component';
import { LoanAccountDeletePopupComponent } from './loan-account-delete-dialog.component';
import { ILoanAccount } from 'app/shared/model/loanservice/loan-account.model';

@Injectable({ providedIn: 'root' })
export class LoanAccountResolve implements Resolve<ILoanAccount> {
    constructor(private service: LoanAccountService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILoanAccount> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<LoanAccount>) => response.ok),
                map((loanAccount: HttpResponse<LoanAccount>) => loanAccount.body)
            );
        }
        return of(new LoanAccount());
    }
}

export const loanAccountRoute: Routes = [
    {
        path: '',
        component: LoanAccountComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'ifrisGatewayApp.loanserviceLoanAccount.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: LoanAccountDetailComponent,
        resolve: {
            loanAccount: LoanAccountResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ifrisGatewayApp.loanserviceLoanAccount.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: LoanAccountUpdateComponent,
        resolve: {
            loanAccount: LoanAccountResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ifrisGatewayApp.loanserviceLoanAccount.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: LoanAccountUpdateComponent,
        resolve: {
            loanAccount: LoanAccountResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ifrisGatewayApp.loanserviceLoanAccount.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const loanAccountPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: LoanAccountDeletePopupComponent,
        resolve: {
            loanAccount: LoanAccountResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ifrisGatewayApp.loanserviceLoanAccount.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
