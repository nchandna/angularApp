import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import {ManagerDashboardComponent} from './manager-dashboard/manager-dashboard.component';
import {ManagerRoutes} from './manager-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild(ManagerRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [ManagerDashboardComponent, CustomerDetailComponent]
})

export class ManagerModule {}
