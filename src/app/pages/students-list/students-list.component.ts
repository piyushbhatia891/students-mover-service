import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StudentsDetails } from "src/app/models/students-details";
import { StudentsApiService } from "src/app/services/api/students-api.service";
import { StudentsState } from "src/app/services/student.state";
import { Subscription } from "rxjs";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.scss"]
})
export class StudentsListComponent implements OnInit, OnDestroy {
  title = "students-design";
  students: StudentsDetails[] = [];
  subscription: Subscription;
  constructor(private router: Router, private service: StudentsApiService) {}

  ngOnInit() {
    this.subscription = this.service.StudentsState.subscribe(
      (state: StudentsState) => {
        this.students = state.students;
      }
    );
    if (this.students.length == 0) this.students = this.service.studentList;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cardClicked(studentId: number) {
    this.service.updateEditableOptionForStudent(studentId);
    //navigating on detail info page
    this.router.navigate(["details", studentId]);
  }
}
