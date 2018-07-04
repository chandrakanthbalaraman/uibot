import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppFormService } from '@app/common/_services/validateform.service';
import { GenerateService } from '@app/common/_services/_http-services/generate.service';

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
        private appFormService: AppFormService,
        private generateService: GenerateService
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
            this.appGenerationFormErrors = this.appFormService.validateForm(
                this.appGenerationForm,
                this.appGenerationFormErrors,
                true
            );

        });

        this.appGenerationFormConfig = {};
        this.appGenerationFormConfig.spinner = false;
    }
    appGenerationFn(form){
        if (form.valid) {
            this.generateApp();
        } else {
            this.appGenerationFormErrors = this.appFormService.validateForm(
                form,
                this.appGenerationFormErrors,
                false
            );
        }
    }
    generateApp(){
        let reqObj = this.appGenerationForm.value;
        reqObj.prefix="gen";
        reqObj.version="5.2.0";
        this.generateService.postGenerate(reqObj).subscribe(
            data => {
               this.generateLayouyts();
            },
            error => {
                
                
            },
            ()=>{
                
            }
        );
    }
    generateLayouyts(){
        let reqObj = {
            project: this.appGenerationForm.value.appName;
        }
        this.generateService.postGenerateLayout(reqObj).subscribe(
            data => {
               console.log("layout created");
            },
            error => {
                
                
            },()=>{
                
            }
        );
    }
    ngOnInit(): void { 
        this.buildAppGenerationForm();
    }
}
