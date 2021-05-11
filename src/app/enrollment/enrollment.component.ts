import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{regname, regemail, regmobile}from 'src/app/shared/constant/constant';
import { CourseServiceService } from '../shared/service/course-service.service';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  stdForm:any;
  qualArray:string[]=['BCA','BBA','B.Tech','MBA','MCA','M.Tech'];
  lhArray:string[]=["Banglore","Chennai","Trivandrum","Pune","Kochi","Delhi","Bombay"];
  cArray:string[]=["Artifical intelligence","Cloud computing","Cyber security","Python programming","c++","Deep learning","Java programming","Operating system","IOT","Data Mining","PHP"];
  rArray:string[]=["Refered by friend","Refered by organsation","By Add","Others"];
  wArray:string[]=["Fresher","1","2","3","4","5+"];
  isCompleted:boolean=false;
  stdObj:any;

  constructor(private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
    this.stdForm=new FormGroup({
      stdName:new FormControl("",[Validators.required,Validators.pattern(regname)]),
      stdContact:new FormControl("",[Validators.required,Validators.pattern(regmobile)]),
      stdEmail:new FormControl("",[Validators.required,Validators.pattern(regemail)]),
      stdQualification:new FormControl("",[Validators.required]),
      stdLh:new FormControl("",[Validators.required]),
      stdOrganisation:new FormControl("",[Validators.required]),
      stdCity:new FormControl("",[Validators.required]),
      stdCollage:new FormControl("",[Validators.required]),
      stdPassout:new FormControl("",[Validators.required]),
      stdSpecification:new FormControl("",[Validators.required]),
      stdbatchtype:new FormControl("",[Validators.required]),
      stdEdustatus:new FormControl("",[Validators.required]),
      stdLhBranch:new FormControl("",[Validators.required]),
      stdCourse:new FormControl("",[Validators.required]),
      stdWheredidyoucame:new FormControl("",[Validators.required]),
      stdworkexp:new FormControl("",[Validators.required])
      
    })

  }
  addData(val:any){
    const stdObj={
      name:val.stdName,
      contact:val.stdContact,
      email:val.stdEmail,
      qualification:val.stdQualification,
      specialization:val.stdSpecification,
      edustatus:val.stdEdustatus,
      passout:val.stdPassout,
      collage:val.stdCollage,
      city:val.stdCity,
      workexp:val.stdworkexp,
      organization:val.stdOrganisation,
      lh:val.stdLh,
      lhBranch:val.stdLhBranch,
      course:val.stdCourse,
      wheredidyoucame:val.stdWheredidyoucame,
      batchtype:val.stdbatchtype
    }
    console.log(stdObj);
    this.serObj.addRecord(stdObj).subscribe(()=>{
      alert("Data added successfully");
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
