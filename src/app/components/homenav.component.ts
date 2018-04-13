import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { PatientDetailsService } from '../services/patient.services';

@Component({
    selector: 'nav-home',
    templateUrl: '../template/homenav.template.html',
})
export class HomeNavComponent implements OnChanges {

	constructor(private patientDetailsService: PatientDetailsService){}
	
	ngOnInit() {

    }

     ngOnChanges(changes: SimpleChanges) {
    	// this.show = false;
    }

	show: boolean = true;
	hideAction(value) {
		this.show = value;
	}

	backAction() { }
}