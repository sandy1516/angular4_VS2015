import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RequestPatientStudyComponent } from './requeststudy.component';

@Component({
    selector: 'tabcontentpage-root',
    templateUrl: '../template/tabcontent.page.html'
})
export class TabContentComponent {

	@ViewChild(RequestPatientStudyComponent) requestPatientStudy
	

  	constructor() { }

  	showTop: boolean = true;

  	receiveMessage($event) {
  		this.showTop = !$event;
  	}

 	// ngAfterViewInit() {
 	// 	this.message = this.requestPatientStudy.message
 	// 	this.showTop = this.requestPatientStudy.showStudy;
 	// }
}




