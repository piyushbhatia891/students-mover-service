import { Injectable } from '@angular/core';
import { StudentsDetails } from '../models/students-details';
import { StudentsApiService } from './api/students-api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:StudentsDetails[]=[];
  url='http://localhost:3000/';
  constructor(private api:StudentsApiService) { }
  getStudentDetails(){
    return this.api.getStudentDetails().then(students =>{
      this.students=students;          
  });
}
}
