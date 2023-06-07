import { Component, ElementRef } from '@angular/core';
import { AppLayoutService } from 'src/app/services/layout/app-layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: AppLayoutService, public el: ElementRef) { }
}

