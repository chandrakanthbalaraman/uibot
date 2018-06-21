import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { BlankComponent } from '@app/layout/main-layout/blank/blank.componen';
import { SharedModule } from '@app/common/_modules/shared.module';

const routes: Routes = [
  {
    'path': '',
    'component': BlankComponent,
  },
];

@NgModule({
    declarations: [
        BlankComponent
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
export class BlankModule {}