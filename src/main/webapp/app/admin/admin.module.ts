import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { IfrisGatewaySharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    IfrisMetricsMonitoringComponent,
    IfrisHealthModalComponent,
    IfrisHealthCheckComponent,
    IfrisConfigurationComponent,
    IfrisDocsComponent,
    IfrisGatewayComponent
} from './';

@NgModule({
    imports: [
        IfrisGatewaySharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        IfrisConfigurationComponent,
        IfrisHealthCheckComponent,
        IfrisHealthModalComponent,
        IfrisDocsComponent,
        IfrisGatewayComponent,
        IfrisMetricsMonitoringComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    entryComponents: [UserMgmtDeleteDialogComponent, IfrisHealthModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfrisGatewayAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
