// ...existing code...
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cv } from './components/cv/cv';
import { Projects } from './components/projects/projects';
import { Hobbies } from './components/hobbies/hobbies';
// ...existing code...
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cv', component: Cv },
  { path: 'projects', component: Projects },
  { path: 'hobbies', component: Hobbies },
  { path: '**', redirectTo: '/home' }
];
