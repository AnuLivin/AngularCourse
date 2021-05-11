import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/shared/service/course-service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
  }
  addData(val:any){
    const cObj={
      course:val.course
    }
    this.serObj.addCourseRecord(cObj).subscribe(()=>{
      alert("Data added successfully");
      this.rouObj.navigate(['/courses']);
    })
  }

}
