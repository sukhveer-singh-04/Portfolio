import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sukhveer-portfolio';
  navComponenets: Array<String> = ['Home', 'Education', 'Projects', 'Experience', 'Achievements', 'About'];
  boxes: Array<String> = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
}
