import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../models/project';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule 
    ]
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initProjects();
  }

  initProjects() {
     this.projects  = [
      {
        name: 'Lely FarmVisit',
        role: 'Frontend/Mobile Developer',
        technologies: ['Angular', 'Ionic', 'TypeScript', 'REST APIs', 'Jasmine & Karma (Unit Testing)'],
        description: 'Developed and maintained the frontend of a cross‑platform iOS and Android application used by advisors to monitor dairy‑farm performance. The app provides a comprehensive KPI dashboard covering milking, feeding, robot usage, reproduction, and more — enabling farm managers to make data-driven decisions. I have participated in the Frontend team which implemented responsive data visualizations, and optimized performance for smooth real‑time interaction with large datasets. The app is publicly available and actively used by Lely clients worldwide.'
      },
      {
        name: 'XVIVO Insights — Web Application',
        role: 'Frontend Developer',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Jasmine & Karma (Unit Testing)'],
        description:'Developed the frontend for the web version of a medical application used for remote monitoring of perfusion data. Focused on building an intuitive, responsive dashboard that displays real-time data such as flow, pressure, temperature, and resistance. Ensured smooth user experience through efficient data handling and visualization, enabling clinical professionals to make timely decisions based on accurate information.'
      },
      {
        name: 'XVIVO Insights — Mobile Application',
        role: 'Frontend/Mobile Developer',
        technologies: ['Ionic', 'Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Jasmine & Karma (Unit Testing)'],
        description: 'Developed the frontend for the web version of a medical application used for remote monitoring of perfusion data. Focused on building an intuitive, responsive dashboard that displays real-time data such as flow, pressure, temperature, and resistance. Ensured smooth user experience through efficient data handling and visualization, enabling clinical professionals to make timely decisions based on accurate information.'
      }
    ];
  } 
}
