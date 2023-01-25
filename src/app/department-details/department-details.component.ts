import { Component } from '@angular/core';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {

  public selected_id =0;

  constructor(private router : Router, private route: ActivatedRoute){

  }
  
    departments =[
      {"id":1, "name":"Angular"},
      {"id":2, "name":"DotNet"},
      {"id":3, "name":"React"},
      {"id":4, "name":"Node"}
    ]
  
    ngOnInit(){
      this.route.paramMap.subscribe((params: ParamMap)=>{
        let id_string = params.get('id')
        this.selected_id =new Number(id_string).valueOf()
      })
    }


  onSelect(department :any){
    this.router.navigate(["/departmentDetails", department.id])
  }

  isSelected(department:any){
    console.log(this.selected_id===department.id)
 return this.selected_id===department.id
  }


}
