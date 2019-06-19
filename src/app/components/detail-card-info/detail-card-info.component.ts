import { Component, OnInit, Input } from "@angular/core";
import { StudentsDetails } from "src/app/models/students-details";
import { StudentsApiService } from "src/app/services/api/students-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-detail-card-info",
  templateUrl: "./detail-card-info.component.html",
  styleUrls: ["./detail-card-info.component.scss"]
})
export class DetailCardInfoComponent implements OnInit {
  @Input()
  student: StudentsDetails;
  constructor(private service: StudentsApiService, private router: Router) {}

  ngOnInit() {}
  incremented() {
    if (this.student.hours < 8) 
    this.student.hours++;
  }
  decremented() {
    if (this.student.hours> 0)
    this.student.hours--;
  }
  saveStudentData() {
    this.service.updateHoursForStudent(this.student.id, this.student);
    this.router.navigate(["home"]);
  }
  designationChanged(val: String) {   
    this.student.designation = val;
  }
}
