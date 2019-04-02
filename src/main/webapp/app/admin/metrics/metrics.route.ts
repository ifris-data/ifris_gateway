import { Route } from '@angular/router';

import { IfrisMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'ifris-metrics',
    component: IfrisMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
