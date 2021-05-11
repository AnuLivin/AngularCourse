import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CourseServiceService } from '../shared/service/course-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  stdArray:any;
  term:string="";
  p:number=1;
  modalRef: any;



  constructor(private serObj:CourseServiceService,private modObj:BsModalService) { }

  ngOnInit(): void {
    this.fetdata();
  }
  fetdata(){
    this.serObj.getUserRecord().subscribe((res)=>{
          this.stdArray=res;
        })
  }
  deleteData(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this.serObj.deleteRecord(id).subscribe(()=>this.fetdata())
      }
   }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modObj.show(template);
  }


  

}
