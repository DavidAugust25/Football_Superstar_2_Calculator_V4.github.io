import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    { path: 'Version_4.1', component: HomePage, title: 'Football Superstar 2 Calculator' },
    { path: '**', redirectTo: 'Version_4.1' }
];
