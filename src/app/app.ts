import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
// Importăm componentele direct aici
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Cv } from './components/cv/cv';
import { Hobbies } from './components/hobbies/hobbies';

@Component({
  selector: 'app-root',
  standalone: true,
  // Le adăugăm în lista de imports
  imports: [Navbar, Home, Projects, Cv, Hobbies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
