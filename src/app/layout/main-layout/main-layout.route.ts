import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core/src/metadata/directives';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';

const routes: Routes = [
    {
        'path': '',
        'component': MainLayoutComponent,
        'children': [
            {
                'path': 'blank',
                'loadChildren': './blank/blank.module#BlankModule'
            },
            {
                'path': 'dashboard',
                'loadChildren': './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        'path': '**',
        'redirectTo': 'dashboard'
    }

]
@NgModule({
    imports: [

        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainLayoutRoutingModule { }