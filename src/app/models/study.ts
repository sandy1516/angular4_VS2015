export class Study{
	constructor(study) {
		this.study = study.studies;
    	this.patientICN = study.patientICN;
    	this.siteNumber = study.siteNumber;
    	this.siteNumbers = study.siteNumbers;
    	this.authSiteNumber = study.authSiteNumber;
    	this.userId = study.userId;
    }

    study:Array<JSON>[];
    patientICN: string;
    siteNumber: string;
    siteNumbers: Array<string>;
    authSiteNumber: string;
    userId: string;
}