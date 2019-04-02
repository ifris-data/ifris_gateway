import { Route } from '@angular/router';

import { IfrisDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: IfrisDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
