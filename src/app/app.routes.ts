import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FragenComponent } from './components/fragen/fragen';
import { StartseiteComponent } from './components/startseite/startseite';
import { ErgebnisComponent } from './components/ergebnis/ergebnis';

export const routes: Routes = [
    { component: StartseiteComponent, path: '' },
    { component: FragenComponent, path: 'fragen' },
    { component: ErgebnisComponent, path: 'ergebnis' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
