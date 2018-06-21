
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dir-sidebar-comp',
    templateUrl: './sidebar.component.html',
    styles: []
})
export class SidebarComponent implements OnInit {
    menuArr:Array<any> = [];
    constructor() {
        // this.menuArr=[
        //     {
        //         name:'Alert',
        //         link:'/pages/alert'
        //     },
        //     {
        //         name:'Button',
        //         link:'/pages/button'
        //     },
        //     {
        //         name:'Card',
        //         link:'/pages/card'
        //     },
        //     {
        //         name:'Color',
        //         link:'/pages/color'
        //     },
        //     {
        //         name:'Label',
        //         link:'/pages/label'
        //     }
        // ]
     }

    ngOnInit() { }
}