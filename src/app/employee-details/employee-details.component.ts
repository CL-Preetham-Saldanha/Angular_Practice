import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
public employee_array : { name: string; id: number; age: number; }[]=[]
public employee_array_edited: { name: string; id: number; age: number; }[]=[]
public toggleFlag=0

constructor(private _employeeService : EmployeeService){

}

toggleEmployee(){
  console.log("this is printing employee toggler")
  if(this.toggleFlag===0){
    this.employee_array_edited= this.employee_array.filter(emp => emp.id%2===0)
    this.toggleFlag=1
  }
  else{
    this.employee_array_edited = this.employee_array.filter(emp => emp.id%2!==0)
    this.toggleFlag=0
  }
}

ngOnInit(){
   this._employeeService.getEmployees().subscribe(data => this.employee_array=data)
  //  this.employee_array_edited=this.employee_array
}
}
