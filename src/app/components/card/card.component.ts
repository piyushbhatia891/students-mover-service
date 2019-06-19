import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { StudentsDetails } from "src/app/models/students-details";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input()
  student: StudentsDetails;
  @Output()
  cardClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onClickEvent(student: number) {
    this.cardClicked.emit(student);
  }
}
