
export interface StudentsDetails {
    id:number;
    firstname:String;
    lastname:String;
    address:Address;
    hours:number;
    isEditable:boolean;
    mobile:number;
    designation:String;
}
 export interface Address{
     line1:String;
     line2:String;
 }