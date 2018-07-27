import { Routes } from '@angular/router';
import {RegisterEvaComponent} from './register-eva.component';


export const EvaRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: RegisterEvaComponent
    }]
}
];
