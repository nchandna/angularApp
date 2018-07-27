import { Routes } from '@angular/router';
import {ManagerDashboardComponent} from './manager-dashboard/manager-dashboard.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';

export const  ManagerRoutes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: ManagerDashboardComponent
        }, {
            path: 'customerDetail',
            component: CustomerDetailComponent
        }
        ]
    }
];
