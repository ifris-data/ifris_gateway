import { Route } from '@angular/router';

import { IfrisGatewayComponent } from './gateway.component';

export const gatewayRoute: Route = {
    path: 'gateway',
    component: IfrisGatewayComponent,
    data: {
        pageTitle: 'gateway.title'
    }
};
