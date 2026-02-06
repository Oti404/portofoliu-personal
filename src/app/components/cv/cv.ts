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
  private dataService = inject(DataService);

  public personal = this.dataService.data.profile;
  public experience = this.dataService.data.experience;



}
