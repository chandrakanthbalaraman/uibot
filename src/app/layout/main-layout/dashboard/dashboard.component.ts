import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppFormService } from '@app/common/_services/validateform.service';

@Component({
    selector: 'k-dashboard',
    templateUrl: './dashboard.view.html'
})
export class KDashboardComponent implements OnInit {

    //Forgot Password form declaration
    appGenerationForm: FormGroup;
    appGenerationFormErrors: any;
    appGenerationFormConfig: any;


    constructor(
        private fb: FormBuilder,
        private formErrorService: AppFormService,
    ) { }
    buildAppGenerationForm(){
         //Forgot Password form builder group initialization
         this.appGenerationForm = this.fb.group({
            appName: [
                '',
                Validators.required
            ]
        },{ updateOn: 'blur' });
        //Forgot Password form error object
        this.appGenerationFormErrors = {
            appName: {}
        };

        //form value changes event
        this.appGenerationForm.valueChanges.subscribe(field => {
            this.appGenerationFormErrors = this.formErrorService.validateForm(
                this.appGenerationForm,
                this.appGenerationFormErrors,
                true
            );

        });

        this.appGenerationFormConfig = {};
        this.appGenerationFormConfig.spinner = false;
    }
    ngOnInit(): void { 
        this.buildAppGenerationForm();
    }
}
