import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'; // <--- 1. Importă asta sus
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // <--- 2. Adaugă aici
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
