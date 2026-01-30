import { Component, inject } from '@angular/core'; // 1. Importăm inject
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  // 2. "Activăm" serviciul folosind inject()
  private service = inject(DataService);

  // 3. Luăm datele din interiorul obiectului 'data'
  public experience = this.service.data.experience;
}
