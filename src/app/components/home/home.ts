import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Asigură-te că numele fișierului e corect (uneori e data.service.ts)
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  public info: any; // Aici vom stoca datele pentru a le afișa în HTML

  // Aici "cerem" serviciul de la Angular
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Când componenta pornește, luăm datele din serviciu
    this.info = this.dataService.data.profile;
  }
}
