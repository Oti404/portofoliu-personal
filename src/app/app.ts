import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; // <--- Importăm componenta nouă

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar], // <--- O declarăm aici
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
