import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'sukhveer-portfolio';
  navComponenets: Array<String> = ['Home', 'Education', 'Projects', 'Experience', 'Achievements', 'About'];
  boxes: Array<String> = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
}
