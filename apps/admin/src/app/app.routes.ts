import { Route } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'dashboard', component: DashbaordComponent },
      // { path: 'dashbaord', component: DashbaordComponent },
    ],
  },
];
