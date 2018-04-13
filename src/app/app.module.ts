import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from './data-table';
// import { DataTableModule } from 'angular5-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { HomeNavComponent } from './components/homenav.component';
import { PageComponent } from './components/container.component';
import { FooterComponent } from './components/footer.component';
import { RequestPatientStudyComponent } from './components/requeststudy.component';
import { TabContentComponent } from './components/tabcontent.component';
import { StudyInfoTableComponent } from './components/studytable.component';
import { StudyHeaderBodyComponent } from './components/studyheaderbody.component';
import { ConsoleLogComponent } from './components/consolelog.component';
import { ValueArrayPipe } from './filters/pipe.filter';

import { PatientDetailsService } from './services/patient.services';

@NgModule({
	imports:		[ BrowserModule, HttpModule, FormsModule, DataTableModule,
					  NgbModule.forRoot(), Ng4LoadingSpinnerModule.forRoot() ],
    declarations:	[ AppComponent, HomeNavComponent, PageComponent, FooterComponent,
    				  TabContentComponent, RequestPatientStudyComponent, StudyInfoTableComponent,
    				  StudyHeaderBodyComponent, ConsoleLogComponent,
    				  ValueArrayPipe],
    providers:		[ PatientDetailsService ],
    bootstrap:		[ AppComponent ]
})
export class AppModule { }
	