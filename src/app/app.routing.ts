import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
      'path': '',
      'redirectTo': 'app/dashboard',
      'pathMatch': 'full',
    },
    {
        'path': 'app',
        'loadChildren': './layout/main-layout/main-layout.module#MainLayoutModule'
    },
    {
        'path': '**',
        'redirectTo': 'app/dashboard'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}