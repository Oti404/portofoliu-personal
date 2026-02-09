import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Hobbies } from './components/hobbies/hobbies';
import { ExperienceComponent } from './components/experience/experience';
import { NgOptimizedImage } from '@angular/common';
import { About } from './components/about/about';
import { AcademicJourneyComponent } from './components/academic-journey/academic-journey';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, Projects,ExperienceComponent, Footer , About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isMenuOpen = false; // Variabila care ține minte starea meniului

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Deschide sau închide
  }

  closeMenu() {
    this.isMenuOpen = false; // Închide meniul când dai click pe un link
  }
}
