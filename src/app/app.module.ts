import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {EscapeHtmlPipe} from './keep-html.pipe';

@NgModule({
  imports:      [ 
    BrowserModule,
    CommonModule,
      NgbModule,
      FormsModule ],
  declarations: [ AppComponent, HelloComponent,EscapeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
