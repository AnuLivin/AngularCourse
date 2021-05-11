import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/shared/service/course-service.service';

@Component({
  selector: 'app-editstd',
  templateUrl: './editstd.component.html',
  styleUrls: ['./editstd.component.css']
})
export class EditstdComponent implements OnInit {
  id:number=0;
  stdObj:any;
  qualArray:string[]=['BCA','BBA','B.Tech','MBA','MCA','M.Tech'];
  lhArray:string[]=["Banglore","Chennai","Trivandrum","Pune","Kochi","Delhi","Bombay"];
  cArray:string[]=["Artifical intelligence","Cloud computing","Cyber security","Python programming","c++","Deep learning","Java programming","Operating system","IOT","Data Mining","PHP"];
  rArray:string[]=["Refered by friend","Refered by organsation","By Add","Others"];
  wArray:string[]=["Fresher","1","2","3","4","5+"];
  isCompleted:boolean=false;

  constructor(private actRouObj:ActivatedRoute,private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
    this.actRouObj.paramMap.subscribe((param)=>{
      this.id=Number(param.get('id'));
    })
    this.serObj.getSingleRecord(this.id).subscribe((res)=>{
      this.stdObj={...res}
    })
  }
  editData(val:any){
    const stdObj={
      id:this.id,
      name:val.name,
      contact:val.contact,
      email:val.email,
      qualification:val.qualification,
      specialization:val.specialization,
      edustatus:val.edustatus,
      passout:val.passout,
      collage:val.collage,
      city:val.city,
      workexp:val.workexp,
      organization:val.organization,
      lhBranch:val.lhBranch,
      course:val.course,
      wheredidyoucame:val.wheredidyoucame,
      batchtype:val.batchtype
    }
    this.serObj.updateRecord(stdObj).subscribe(()=>{
      alert(`Record with ${stdObj.id} update successfully!`)
      this.rouObj.navigate(['/dashboard']);
    })
  }
  radioSel(val:any){
    if(val=='Completed'){
      this.isCompleted=true;
    }else{
      this.isCompleted=false;

    }
    
    
  }

}
