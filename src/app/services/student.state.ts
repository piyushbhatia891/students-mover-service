import { StudentsDetails } from "../models/students-details";

export interface StudentsState {
    loaded:boolean;
    students:StudentsDetails[];
}
