import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  roles = [
    {
      designation: "Software Engineer",
      company: "Relinns Technologies Private Limited",
      timePeriod: "Aug-2023 - Present",
      description: `Managed backend services using Node.js and Express.js, ensuring high availability and optimal performance. \n Led the implementation of an innovative caching strategy, achieving a 25% reduction in response time and
      enhancing user satisfaction by 15%. \nCollaborated with cross-functional teams to design and implement new features, ensuring alignment with project
      goals and client requirements. \n Optimized database costs by 30% through effective caching strategies and resource management.`,
      technologies : ["Angular", "NodeJs", "ExpressJs", "MongoDB", "Git", "Gitlab", "VS Code", "Socket"]
    },
    {
      designation: "Web Developer Intern",
      company: "Relinns Technologies Private Limited",
      timePeriod: "Jan-2023 - Jul-2023",
      description: `Designed and implemented database schemas that improved data storage efficiency and query performance.
      Developed robust data structures to optimize retrieval processes, ensuring seamless access to critical information.`,
      technologies : ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "TypeScript", "Angular"]
    }
  ]
}
