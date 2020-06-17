import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { TaskComponent } from '../app/tasks/task.component';

const appRoutes: Routes = [
    {path: 'task', component: TaskComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
