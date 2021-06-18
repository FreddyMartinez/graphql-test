import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {
    component: StudentsListComponent, path: 'students'
  },
  {
    component: CoursesListComponent, path: 'courses'
  },
  {
    path: '**', redirectTo: '/students', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
