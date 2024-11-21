import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'work',component:WorkComponent},
    {path: '**', component: NotfoundComponent}
];
