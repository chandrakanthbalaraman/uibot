import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { MainLayoutRoutingModule } from '@app/layout/main-layout/main-layout.route';
import { SharedModule } from '@app/common/_modules/shared.module';

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [ 
        CommonModule,
        MainLayoutRoutingModule,
        SharedModule
    ],
    exports: [
        
    ],
    providers: [],
})
export class MainLayoutModule {}