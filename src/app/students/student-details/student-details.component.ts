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
    email: "",
    name: "",
    username:"",
    maplink:"",
    albums:[],
    address:{
      street:"",
      suite:"",
      city:"",
      geo:{
        lat:"0.0",
        lng:"0,0"
      }
    }
  }

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
      this.student.maplink='https://www.google.com/maps/@' + this.student.address.geo.lat + ',' + this.student.address.geo.lng+",15z";
      this.studentService.getStudentAlbums(this.studentId).then(response => {
        console.log('Albums Response: ', response);
        this.student.albums = response;
      });
    });
  }

  ngAfterViewInit() {
    console.log('HTML Listo');
  }

  ngOnDestroy() {
    console.log('Will destroy component');
  }

}
