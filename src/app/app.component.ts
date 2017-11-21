import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  homePageImg = false;

  constructor(private router: Router){

    this.router.events.subscribe((event) => {

      if(event['urlAfterRedirects'] == "/home"){
        this.homePageImg = true;
      } else {
        this.homePageImg = false;
      }

    });

  }
}
