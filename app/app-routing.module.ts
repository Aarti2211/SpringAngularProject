import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'addstudent', component: StudentFormComponent },
  { path: 'deletestudent', component:DeleteStudentComponent },
  {path:"updatestudent", component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
