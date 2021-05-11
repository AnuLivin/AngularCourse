import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/shared/service/course-service.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  id:number=0;
  courObj:any;

  constructor(private routObj:Router,private serObj:CourseServiceService,private actRouObj:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRouObj.paramMap.subscribe((param)=>{
      this.id=Number(param.get('id'));
    })
    this.serObj.getSingleCourseRecord(this.id).subscribe((res)=>{
      this.courObj={...res}
    })
  }
  editData(val:any){
    const courObj={
      id:this.id,
      course:val.course
      
    }
    this.serObj.updateCourseRecord(courObj).subscribe(()=>{
      alert(`Record with ${courObj.id} update successfully!`)
      this.routObj.navigate(['/courses']);
    })
  }

}
