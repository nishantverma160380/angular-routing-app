import { Routes } from '@angular/router';

import { Settings } from './settings';

export const SETTINGS_ROUTES: Routes = [

    {
        path: '',

        component: Settings,

        children: [

            {
                path: '',
                redirectTo: 'account',
                pathMatch: 'full'
            },

            {
                path: 'account',

                loadChildren: () =>
                    import('./account/account.routes')
                        .then(m => m.accountRoutes)
            },

            {
                path: 'notifications',

                loadComponent: () =>
                    import('./notifications/notifications')
                        .then(m => m.Notifications)
            }

        ]

    }

];