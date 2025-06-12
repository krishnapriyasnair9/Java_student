import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentViewComponent } from './student-view/student-view.component';
// import { StudentListComponent } from './student-list/student-list.component';
// import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';
export const routes: Routes = [
//     { path: 'students', component: StudentListComponent },
//   { path: 'students/add', component: StudentFormComponent },
//   { path: 'students/edit/:id', component: StudentFormComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent },
  { path: 'students/:id', component: StudentViewComponent },
  
];
