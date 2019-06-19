import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StudentsDetails } from "src/app/models/students-details";

@Component({
  selector: "app-detail-card",
  templateUrl: "./detail-card.component.html",
  styleUrls: ["./detail-card.component.scss"]
})
export class DetailCardComponent implements OnInit {
  @Input()
  student: StudentsDetails;
  @Output()
  clicked = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  buttonClicked() {
    this.clicked.emit(this.student.id);
  }
}
