import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
      'path': '',
      'redirectTo': 'app/blank',
      'pathMatch': 'full',
    },
    {
        'path': 'app',
        'loadChildren': './layout/main-layout/main-layout.module#MainLayoutModule'
    },
    {
        'path': '**',
        'redirectTo': 'app/blank'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}