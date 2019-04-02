import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { IfrisGatewaySharedLibsModule, IfrisGatewaySharedCommonModule, IfrisLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [IfrisGatewaySharedLibsModule, IfrisGatewaySharedCommonModule],
    declarations: [IfrisLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [IfrisLoginModalComponent],
    exports: [IfrisGatewaySharedCommonModule, IfrisLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfrisGatewaySharedModule {
    static forRoot() {
        return {
            ngModule: IfrisGatewaySharedModule
        };
    }
}
