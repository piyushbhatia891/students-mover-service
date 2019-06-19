import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-toggle-switch",
  templateUrl: "./toggle-switch.component.html",
  styleUrls: ["./toggle-switch.component.scss"]
})
export class ToggleSwitchComponent implements OnInit {
  @Input()
  designation: String;
  @Output()
  designationChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  emitSelectedValue(evt) {
    this.designationChange.emit(evt);
  }
}
