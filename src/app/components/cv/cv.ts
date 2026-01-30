
import { Component, inject } from '@angular/core';
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
  private service = inject(DataService);

  // Avem nevoie și de datele personale pentru link-ul de PDF
  public experience = this.service.data.experience;
  public profile = this.service.data.profile;
}



