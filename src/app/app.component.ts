import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Demo App';

  constructor() {
    // use for service injection
  }

  ngOnInit() {
    // use for state cleanup
  }

}