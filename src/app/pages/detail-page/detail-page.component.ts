import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentsApiService } from "src/app/services/api/students-api.service";
import { StudentsDetails } from "src/app/models/students-details";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  studentDetails: StudentsDetails;
  studentsList: StudentsDetails[] = [];
  studentId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentsApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(queryParam => {
      this.studentId = + queryParam.get("id");
      if (this.service.studentList.length != 0) {
        this.studentsList = this.service.studentList;
        this.getFilteredStudentsList();
      } else this.subscribeToStudentState();
    });
  }

  private subscribeToStudentState() {
    return this.service
      .getStudentDetails()
      .then((students: StudentsDetails[]) => {
        this.studentsList = students;
        this.getFilteredStudentsList();
      });
  }

  private getFilteredStudentsList() {
    this.studentsList.filter((studentItem: StudentsDetails) => {
      if (studentItem.id === this.studentId) {
        this.studentDetails = studentItem;
      }
      this.studentsList.filter((studentItem: StudentsDetails) => {
        studentItem.id != this.studentId;
      });
    });
  }
  navigateBack() {
    this.router.navigate(["home"]);
  }

  navigateToDetail(id: number) {
    this.studentsList = this.service.updateEditableOptionForStudent(id);
    this.studentId = id;
    this.getFilteredStudentsList();
  }
}
