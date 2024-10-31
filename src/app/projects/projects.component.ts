import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'BotPenguin',
      image: '../assets/images/bot-penguin.png',
      backgroundImage: '../assets/images/bp-bg.jpeg',
      description: 'Sukhveer is an educational platform that helps students in learning new skills.',
      timePeriod: '2019 - 2020',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
      link: 'https://botpenguin.com/'
    },
    {
      title: 'Black Book',
      image: '../assets/images/black-book.png',
      backgroundImage: '../assets/images/bb-bg.jpeg',
      description: 'Sukhveer is an educational platform that helps students in learning new skills.',
      timePeriod: '2019 - 2020',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
      link: 'https://officalblackbook.com/'
    },
    {
      title: 'EcommereceBots',
      image: '../assets/images/ecommercebot.png',
      backgroundImage: '../assets/images/ecom-bg.jpeg',
      description: 'Sukhveer is an educational platform that helps students in learning new skills.',
      timePeriod: '2019 - 2020',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
      link: 'https://sukhveer.com/'
    },
    {
      title: 'Authentic Driling',
      image: '../assets/images/ats.png',
      backgroundImage: '../assets/images/ad-bg.jpeg',
      description: 'Sukhveer is an educational platform that helps students in learning new skills.',
      timePeriod: '2019 - 2020',
      technologies: ['Angular', 'NodeJS', 'MongoDB'],
      link: 'https://sukhveer.com/'
    }
  ]
}
