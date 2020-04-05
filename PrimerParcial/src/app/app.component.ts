import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'PracticaSegundoParcial';
  showSpinner: boolean;


constructor(private spinner: NgxSpinnerService) {
  this.showSpinner = false;
}
ngOnInit() {
  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 1500);
}

prepareRoute(outlet: RouterOutlet){
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

}