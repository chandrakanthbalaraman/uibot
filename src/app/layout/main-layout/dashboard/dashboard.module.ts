import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { KDashboardComponent } from '@app/layout/main-layout/dashboard/dashboard.component';
import { SharedModule } from '@app/common/_modules/shared.module';

const routes: Routes = [
  {
    'path': '',
    'component': KDashboardComponent,
  },
];

@NgModule({
    declarations: [
        KDashboardComponent
    ],
    imports: [
         CommonModule,
         RouterModule.forChild(routes),
         SharedModule
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class DashboardModule {}