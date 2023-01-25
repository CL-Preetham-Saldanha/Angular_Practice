import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {


  public department_id=0 ;

constructor (private route : ActivatedRoute, private router: Router ){}

ngOnInit(){

  // const id_string =this.route.snapshot.paramMap.get('id')
  // let id : Number= new Number(id_string)
  // this.department_id= id.valueOf();
this.route.paramMap.subscribe((params: ParamMap)=>{
  let id_string = params.get('id')
  this.department_id =new Number(id_string).valueOf()
})

}
 
goToPrevious(){
  let previousId = this.department_id-1
  this.router.navigate(["/departmentDetails", previousId])
}


goToNext(){
  let nextId = this.department_id+1;
  this.router.navigate(["/departmentDetails", nextId])
}

goToDepartments(){
  
  this.router.navigate(["/departmentDetails",{id: this.department_id}])
}

}
