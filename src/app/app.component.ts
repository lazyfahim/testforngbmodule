import { Component } from '@angular/core';
import {ProblemViewModel} from './ProblemView.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  model:ProblemViewModel;
  constructor(){
    this.model = new ProblemViewModel();
    this.model.problemName = 'a problem';
    this.model.problemDescription = '<h1>a hi</h1>';
  }
}
