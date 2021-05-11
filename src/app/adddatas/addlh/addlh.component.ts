import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/shared/service/course-service.service';

@Component({
  selector: 'app-addlh',
  templateUrl: './addlh.component.html',
  styleUrls: ['./addlh.component.css']
})
export class AddlhComponent implements OnInit {


  constructor(private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
  }
  addData(val:any){
    const lhObj={
      branch:val.branch
    }
    this.serObj.addLhRecord(lhObj).subscribe(()=>{
      alert("Data added successfully");
      this.rouObj.navigate(['/lighthouse']);
    })
  }

}
