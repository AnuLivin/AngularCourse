import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/shared/service/course-service.service';

@Component({
  selector: 'app-editlh',
  templateUrl: './editlh.component.html',
  styleUrls: ['./editlh.component.css']
})
export class EditlhComponent implements OnInit {
  id:number=0;
  lhObj:any;

  constructor(private actRouObj:ActivatedRoute,private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
    this.actRouObj.paramMap.subscribe((param)=>{
      this.id=Number(param.get('id'));
    })
    this.serObj.getSingleLhRecord(this.id).subscribe((res)=>{
      this.lhObj={...res}
    })
  }
  editData(val:any){
    const lhObj={
      id:this.id,
      branch:val.branch
    }
    this.serObj.updateLhRecord(lhObj).subscribe(()=>{
      alert(`Record with ${lhObj.id} update successfully!`)
      this.rouObj.navigate(['/lighthouse']);
    })
  }

}
