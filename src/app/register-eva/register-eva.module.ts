import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RegisterEvaComponent} from './register-eva.component';
import {EvaRoutes} from './register-eva.routing';

@NgModule({
    imports: [
        RouterModule.forChild(EvaRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [RegisterEvaComponent]
})

export class RegisterEvaModule {}
