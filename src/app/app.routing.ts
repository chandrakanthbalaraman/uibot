import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
      'path': '',
      'redirectTo': 'home',
      'pathMatch': 'full',
    },
    {
        'path': 'home',
        'loadChildren': './layout/main-layout/blank/blank.module#BlankModule'
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}