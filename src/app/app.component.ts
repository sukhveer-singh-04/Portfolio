import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sukhveer-portfolio';
    navComponenets: Array<String> = ['Home', 'Education', 'Projects', 'Experience', 'Achievements', 'About'];
}
