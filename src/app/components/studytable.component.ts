import { Component, Input  } from '@angular/core';
import { DataTableResource } from '../data-table';
// import { DataTableResource } from 'angular5-data-table';
import { Study } from '../models/study';
import persons from '../persons';

@Component({
    selector: "study-info-table",
	templateUrl: "../template/studytable.template.html"
})
export class StudyInfoTableComponent {
	
    @Input() studyInfo;
    items = [];
    itemCount = 0;
    active: boolean = false;
    property;

    paginationLimit = 5; 
    
    itemResource = new DataTableResource([]);

    reloadItems(params) {
        this.itemResource.query(params).then(
            items => {
                if(this.studyInfo!== null && this.studyInfo!== undefined){
                    this.items = this.studyInfo.study;    
                }
                console.log(this.items);
                let itemResource = new DataTableResource(this.items);
                itemResource.query(params).then(items => this.items = items); 
        });        
    }

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.property; }

    viewStudy(selectedStudyViewerUrl) {
        window.open(selectedStudyViewerUrl);
    }

    manageStudy(selectedStudyManageUrl) {
        window.open(selectedStudyManageUrl);
    }

    getDetailsURL(selectedStudyDetailsUrl) {
        window.open(selectedStudyDetailsUrl);
    }

}