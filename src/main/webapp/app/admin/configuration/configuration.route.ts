import { Route } from '@angular/router';

import { IfrisConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'ifris-configuration',
    component: IfrisConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
