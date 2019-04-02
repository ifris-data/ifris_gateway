import { NgModule } from '@angular/core';

import { IfrisGatewaySharedLibsModule, FindLanguageFromKeyPipe, IfrisAlertComponent, IfrisAlertErrorComponent } from './';

@NgModule({
    imports: [IfrisGatewaySharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, IfrisAlertComponent, IfrisAlertErrorComponent],
    exports: [IfrisGatewaySharedLibsModule, FindLanguageFromKeyPipe, IfrisAlertComponent, IfrisAlertErrorComponent]
})
export class IfrisGatewaySharedCommonModule {}
