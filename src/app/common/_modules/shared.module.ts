import { NgModule } from '@angular/core';
import { RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@app/common/_components/sidebar/sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule {}