import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CourseServiceService } from '../shared/service/course-service.service';

@Component({
  selector: 'app-lighthouse',
  templateUrl: './lighthouse.component.html',
  styleUrls: ['./lighthouse.component.css']
})
export class LighthouseComponent implements OnInit {
  lhArray:any;
  term:string="";
  p:number=1;
  modalRef: any;

  constructor(private serObj:CourseServiceService,private modObj:BsModalService) { }

  ngOnInit(): void {
    this.fetdata();
  }
  fetdata(){
    this.serObj.getLhRecord().subscribe((res)=>{
          this.lhArray=res;
        })
  }
  deleteLhData(id:any){
    if(confirm(`Are you sure to delete record with id:${id}`)){
      this.serObj.deleteLhRecord(id).subscribe(()=>this.fetdata())
      }
   }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modObj.show(template);
  }
}
