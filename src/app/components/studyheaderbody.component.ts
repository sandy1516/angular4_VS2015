import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "study-headerbody",
	templateUrl: "../template/studyheaderbody.template.html"
})
export class StudyHeaderBodyComponent {

	@Input() bodyData: Array<JSON>;
    @Input() headerData: Array<JSON>;
    // @Output() updatedHeader = new EventEmitter();
    updatedHeader;
    index;
    updateHeader(eventData, index) {
        console.log(this.headerData[index]);
        this.index = index;
        let key;
        let value;
        let header;
        // for (let i = 0; i < this.headerData.length; i++) {
            // if(i==index) {
                key=eventData.value.split(":")[0];
                value=eventData.value.split(":")[1];
                header = {
                    key: key,
                    value: value
                }
            // }
        // }
        this.updatedHeader = header;
        // this.headerData[index]=header;
    }

    ngOnChanges() {
    	console.log("its working!");
    }
}