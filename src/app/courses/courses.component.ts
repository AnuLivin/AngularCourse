import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CourseServiceService } from '../shared/service/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseArray:any;
  term:string="";
  p:number=1;
  modalRef: any;

  constructor(private serObj:CourseServiceService,private modObj:BsModalService) { }

  ngOnInit(): void {
    this.fetdata();
  }
  fetdata(){
    this.serObj.getCourseRecord().subscribe((res)=>{
          this.courseArray=res;
        })
  }
  deleteCourseData(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this.serObj.deleteCourseRecord(id).subscribe(()=>this.fetdata())
      }
   }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modObj.show(template);
  }

}
