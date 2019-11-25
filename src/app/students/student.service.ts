import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  // students:Array<Student> = [
  //   { name: 'John Doe', email: 'john.doe@noemail.com' }
  // ];

  constructor(private httpClient:HttpClient) { 
  }

  getStudents():Promise<any> {
    console.log('traer estudiantes');
    const url = environment.apiUrl + 'users';
    return this.httpClient.get(url).toPromise();
  }

  getStudentDetails(id:number):Promise<any> {
    console.log('traer UN estudiante');
    // const url = this.apiUrl + '/'+id;
    const url = `${environment.apiUrl}users/${id}`;
    return this.httpClient.get(url).toPromise();
  }

  // createStudent(student:Student) {
  //   this.students.push(student);
  // }
}
