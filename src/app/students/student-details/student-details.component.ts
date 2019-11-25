import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  studentId:number;
  student:Student = {
    name: '',
    email: ''
  };

  sample:number = 5;

  constructor(
    private activatedRoute:ActivatedRoute,
    private studentService:StudentService
  ) {
    this.activatedRoute.params.subscribe(params => {
      // this.getStudentDetails(params.studentId);
      this.studentId = params.studentId;
    });

    console.log('Construct');
  }

  ngOnInit() {
    console.log('Initialized!');
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.studentService.getStudentDetails(this.studentId).then(response => {
      console.log('Response: ', response);
      this.student = response;
    });
  }

  ngAfterViewInit() {
    console.log('HTML Listo');
  }

  ngOnDestroy() {
    console.log('Will destroy component');
  }

}
