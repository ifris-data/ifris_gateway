import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { IfrisGatewaySharedModule } from 'app/shared';
import {
    LoanAccountComponent,
    LoanAccountDetailComponent,
    LoanAccountUpdateComponent,
    LoanAccountDeletePopupComponent,
    LoanAccountDeleteDialogComponent,
    loanAccountRoute,
    loanAccountPopupRoute
} from './';

const ENTITY_STATES = [...loanAccountRoute, ...loanAccountPopupRoute];

@NgModule({
    imports: [IfrisGatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LoanAccountComponent,
        LoanAccountDetailComponent,
        LoanAccountUpdateComponent,
        LoanAccountDeleteDialogComponent,
        LoanAccountDeletePopupComponent
    ],
    entryComponents: [LoanAccountComponent, LoanAccountUpdateComponent, LoanAccountDeleteDialogComponent, LoanAccountDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoanserviceLoanAccountModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
