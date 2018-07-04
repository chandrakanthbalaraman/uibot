import { NgModule } from '@angular/core';
import { RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputTrimModule } from 'ng2-trim-directive';

import { SidebarComponent } from '@app/common/_components/sidebar/sidebar.component';
import { AppControlErrorComponent } from '@app/common/_components/form-controls/app-control-error/app-control-error.component';
import { ErrorMessagePipe } from '@app/common/_pipes/error-message.pipe';
import { AnimateIfOnDomDirective } from '@app/common/_directive/animateif.directive';

@NgModule({
    declarations: [
        SidebarComponent,
        AppControlErrorComponent,
        ErrorMessagePipe,
        AnimateIfOnDomDirective
    ],
    imports: [ 
        CommonModule,
        RouterModule,
		ReactiveFormsModule,
        FormsModule,
        InputTrimModule,
        HttpClientModule
    ],
    exports: [
        SidebarComponent,
        ReactiveFormsModule,
        FormsModule,
        InputTrimModule,
        AppControlErrorComponent,
        ErrorMessagePipe,
        AnimateIfOnDomDirective,
        HttpClientModule
    ],
    providers: [],
})
export class SharedModule {}