import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard], data: {
    action: ''
  } },
  { path: 'students/:studentId', component: StudentDetailsComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
