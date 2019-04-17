import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { mobiscroll, MbscDatetimeOptions, MbscFormOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios'
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    mobile: Date;
    desktop: Date;

    mobileSettings: MbscDatetimeOptions = {
        display: 'bubble'
    };

    desktopSettings: MbscDatetimeOptions = {
        display: 'bubble',
        touchUi: false
    };

    formSettings: MbscFormOptions = {
        inputStyle: 'box'
    };

}