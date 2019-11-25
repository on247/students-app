import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router } from '@angular/router';
import { Student } from './student';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  test:string = '1234';

  students:Array<Student> = [];

  student:Student = {
    email: "",
    name: ""
  }

  constructor(
    private studentService:StudentService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log('Is logged in: ', this.authService.isLoggedIn());
    // if(!this.authService.isLoggedIn()) {
    //   console.log('Enviar a login');
    //   this.router.navigate(['/']);
    //   return;
    // } 
    this.studentService.getStudents().then(response => {
      this.students = response;
      console.log('Response: ', this.students);
    });
  }

  addStudent() {
    // if(!this.student.name || !this.student.email) return;
    // this.studentService.createStudent(this.student);
    // this.resetStudent();
  }

  resetStudent() {
    this.student = {
      name: "",
      email: ""
    }
  }

}
