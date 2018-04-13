import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PatientDetailsService } from '../services/patient.services';
import { HomeNavComponent } from './homenav.component';
import { StudyHeaderBodyComponent } from './studyheaderbody.component';

import { Study } from '../models/study';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: "request-study",
	templateUrl: "../template/requeststudy.template.html"
})
export class RequestPatientStudyComponent implements OnInit {
    patients: any = {};
    requestUrl: string;
    viewerUrl: string;
    studyInfo: Study;
    patientICN: string;
    bodyData: string;
    headerData: Array<JSON>;
    name: string;
    showStudy: boolean = false;

    ngOnInit() {
        this.getPatient(this.patientDetailsService);
    }
    
    @Output() onStudyEvent = new EventEmitter();

    @ViewChild(StudyHeaderBodyComponent) newHeader;

	constructor(private patientDetailsService: PatientDetailsService,
                private spinnerService: Ng4LoadingSpinnerService) { }

    getPatient(patientDetailsService): void {
    	patientDetailsService.getDetails().subscribe(data => {
            this.patients = data;
            this.bodyData = data.items[0].body;
            this.headerData = data.headers[0].items;
            this.name = this.patients.items[0].header.name;
            for(let header of this.patients.headers){
                if(header.name == this.name) {
                    this.headerData = header.items;
                }
            }
            this.showConsole();
        });
        this.requestUrl = patientDetailsService.requestUrl;
    }

    applyHeaderTitle(title: string): void {
        console.log(this.bodyData);
        for(let item of this.patients.items){
            if(item.title == title) {
                this.bodyData = item.body;
                this.name = item.header.name;
            }
        }
        for(let header of this.patients.headers){
            if(header.name == this.name) {
                this.headerData = header.items;
            }
        }
        this.requestUrl = this.patientDetailsService.requestUrl;
    }

	fetchStudyInformation(): void {
        this.ngAfterViewInit();
        this.spinnerService.show();
		this.patientDetailsService.getStudyInformation(this.bodyData, this.headerData)
		.subscribe(data => {
            console.log("testing1");
            this.studyInfo = new Study(data);
            this.showStudy = true;
            this.onStudyEvent.emit(this.showStudy);
            this.showConsole();
            this.spinnerService.hide();
        });
	}

    ngAfterViewInit() {
        if(this.newHeader.updatedHeader !== undefined && this.newHeader.updatedHeader !== null) {
            this.headerData[this.newHeader.index] = this.newHeader.updatedHeader;    
        }
    }

    showConsole() {
        console.log("\n\nREQUEST URL:\n" + JSON.stringify(this.requestUrl));
        console.log("\n\nPATIENTS:\n" + JSON.stringify(this.patients));
        console.log("\n\nBODY DATA:\n" + JSON.stringify(this.bodyData));
        console.log("\n\nHEADER DATA:\n" + JSON.stringify(this.headerData));
    }
}

