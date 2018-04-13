import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Study } from '../models/study';
    
@Injectable()
export class PatientDetailsService {

	requestUrl: string = "http://localhost:9911/vix/viewer/studyquery";

	constructor( private http: Http ) { }

    patientTitleUrl: string = 'http://localhost:9911/vix/viewer/test/testdata/Default';

    patients: any = {};
    headers: Array<JSON> = [];
    getDetails(): Observable<Response> {
        return this.http.get(this.patientTitleUrl)
        					.map(res => this.patients = res.json());
    }

    getStudyInformation(bodyData, headersData: Array<JSON>): Observable<Response> {
		let headers = new Headers();
		let key;
    	let value;
    	let header;
		for (let i = 0; i < headersData.length; i++) {
			header = headersData[i];
			key = header.key;
			value = header.value;
			headers.append(key, value);
		}
		let options = new RequestOptions({headers: headers});
    	
    	return this.http.post(this.requestUrl, bodyData, options)
    						.map((res:Response) => res.json())
    }
}