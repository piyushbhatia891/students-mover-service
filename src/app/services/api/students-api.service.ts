import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { StudentsDetails } from 'src/app/models/students-details';
import { StudentsState } from '../student.state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {
  private studentSubject=new Subject<StudentsState>();
  students:any='';
  StudentsState = this.studentSubject.asObservable();

  studentList: StudentsDetails[]=[];
  constructor(private http:HttpClient) { 
    this.getStudentDetails();
  }
  getStudentDetails(){
    this.students = this.http.get(environment.url + "students").toPromise() as Promise<
      StudentsDetails[]
    >;
    this.students.then(studentList => {
      this.studentList = studentList;
      this.studentSubject.next(<StudentsState>{
        loaded: true,
        students: studentList
      });
    });
    return this.students;
  }

  updateHoursForStudent(id: number, studentDetail: StudentsDetails) {
    this.studentList.map((student: StudentsDetails) => {
      if (student.id === id) {
        student = studentDetail;
      }
    });
    this.studentSubject.next(<StudentsState>{
      loaded: true,
      students: this.studentList
    });
  }
  updateEditableOptionForStudent(id:number){
    this.studentList.map((student: StudentsDetails) => {
      if (student.id === id) {
        student.isEditable=true;
      }
      else
        student.isEditable=false;
    });
    return this.studentList;
  }
}
