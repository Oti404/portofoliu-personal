import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public data = {

    profile: {
      name: 'Otniel-Viorel Iacob',
      role: 'Software Developer',
      description: 'Building the future with code. I transform complex ideas into simple, fast, and interactive web applications.',
      photo: 'images/profile-picture.jpg',
      avatar: 'assets/tech-core.webp',
      cvPdf: 'assets/cv.pdf',
      location: 'Cluj-Napoca, RO',
      email: 'otniel.contact@gmail.com',
      linkedin: 'https://linkedin.com/in/otniel-iacob',
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
      },{
        id: 102,
        name: 'Portofoliu Personal2',
        tech: 'Angular 17, GitHub Pages',
        description: 'Site-ul pe care îl vizitezi chiar acum, cu CI/CD automatizat.',
        link: '#'
      },{
        id: 103,
        name: 'Portofoliu Personal3',
        tech: 'Angular 17, GitHub Pages',
        description: 'Site-ul pe care îl vizitezi chiar acum, cu CI/CD automatizat.',
        link: '#'
      },{
        id: 104,
        name: 'Portofoliu Personal4',
        tech: 'Angular 17, GitHub Pages',
        description: 'Site-ul pe care îl vizitezi chiar acum, cu CI/CD automatizat.',
        link: '#'
      },
      {
        id: 105,
        name: 'Weather App',
        tech: 'API Integration, CSS',
        description: 'Aplicație care afișează vremea în timp real.',
        link: '#'
      }
    ],

    hobbies:[
      {
      id: 1,
      name: 'PROGRAMMING',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/web.png',
      link: 'images/profile-picture.jpg'
    },
    {
      id: 2,
      name: 'ART',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/painting.png',
      link: '#'
    },
    {
      id: 3,
      name: 'WRITING',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/writing.png',
      link: '#'
    },
    {
      id: 4,
      name: 'TRAVELLING',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/world.png',
      link: '#'
    },
    {
      id: 5,
      name: 'SINGING',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/microphone.png',
      link: '#'
    },
    {
      id:  6,
      name: 'MECHANICAL AUTOMOBILES',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/car.png',
      link: '#'
    },
    {
      id: 7,
      name: 'Sports',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/sports.png',
      link: '#'
    },
    {
      id: 8,
      name: 'SELF DEVELOPMENT',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/development.png',
      link: '#'
    },
    {
      id: 9,
      name: 'READING',
      description: 'Capturarea momentelor speciale prin lentilă.',
      icon: 'assets/hobby/reading.png',
      link: '#'
    },
  ]
  };
}
