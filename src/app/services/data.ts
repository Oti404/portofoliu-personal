import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public data = {
    profile: {
      name: 'Otniel-Viorel Iacob',
      role: 'Student',
      description: 'Salut! Sunt un dezvoltator pasionat de Angular, dornic să construiesc aplicații web performante.',
      photo:'images/profile-picture.jpg',
      cvPdf: 'documents/cv-otniel.pdf',
      location: 'România',
      email: 'otniel.contact@gmail.com',
      linkedin: 'https://www.linkedin.com/in/otniel-iacob',
      github: 'https://github.com/Oti404'
    },

    // Lista de Joburi / Educație
    experience: [
      {
        id: 1, // ID numeric (Long style)
        company: 'Nume Companie / Facultate',
        role: 'Web Developer',
        period: '2023 - Prezent',
        description: 'Dezvoltare interfețe user-friendly folosind Angular și SCSS.'
      },
      {
        id: 2,
        company: 'Freelance',
        role: 'Junior Dev',
        period: '2022 - 2023',
        description: 'Proiecte mici pentru clienți locali.'
      }
    ],

    // Lista de Proiecte
    projects: [
      {
        id: 101,
        name: 'Portofoliu Personal',
        tech: 'Angular 17, GitHub Pages',
        description: 'Site-ul pe care îl vizitezi chiar acum, cu CI/CD automatizat.',
        link: '#'
      },
      {
        id: 102,
        name: 'Weather App',
        tech: 'API Integration, CSS',
        description: 'Aplicație care afișează vremea în timp real.',
        link: '#'
      }
    ],

    hobbies: ['Programare', 'Art', 'Writing', 'Travelling', 'Singing', 'Mechanical Automobiles', 'Football' ]
  };
}
