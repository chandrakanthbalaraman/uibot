import { NgModule, SkipSelf, Optional  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormService } from '@app/common/_services/validateform.service';
import { GenerateService } from '@app/common/_services/_http-services/generate.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        AppFormService,
        GenerateService
	]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
          throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
        }
      }
}