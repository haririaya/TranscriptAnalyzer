import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptAnalyzerComponent } from './transcript-analyzer/transcript-analyzer.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { DisplayTableComponent } from './display-table/display-table.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


const appRoutes: Routes = [
{ path: '', component: TranscriptAnalyzerComponent}];
@NgModule({
  declarations: [
    AppComponent,
    TranscriptAnalyzerComponent,
    DisplayTableComponent
  ],
  imports: [
  	MatToolbarModule,
  	MatSelectModule,
  	RouterModule,
  	RouterModule.forRoot (appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
