import { Component, OnInit } from '@angular/core';
import {AppAnimations} from '@app/common/_const/animate.const'


@Component({
    selector: 'app-control-error',
    templateUrl: './app-control-error.view.html',
    styles: [

    ],
    animations: AppAnimations
})
export class AppControlErrorComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
