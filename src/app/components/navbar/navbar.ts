import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pentru ngClass

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Nu mai avem nevoie de RouterLink, folosim doar href și click
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  // Ținem minte care e secțiunea activă
  activeSection: string = 'home';

  // Funcție ca să dăm scroll manual când dai click pe meniu
  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Ascultăm evenimentul de scroll al ferestrei
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'projects', 'cv', 'hobbies'];

    // Iterăm prin secțiuni să vedem care e vizibilă
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Dacă partea de sus a secțiunii e aproape de susul ecranului (cu o marjă de 150px)
        if (rect.top >= 0 && rect.top < 300) {
          this.activeSection = section;
          break; // Am găsit-o, ne oprim
        }
        // Sau un caz special: dacă suntem la fundul paginii, activează ultima
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
           this.activeSection = 'hobbies';
        }
      }
    }
  }
}
