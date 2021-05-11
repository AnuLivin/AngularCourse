import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../shared/service/course-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid:string="";
  upass:string="";
  studData:any=[];

  constructor(private serObj:CourseServiceService,private rouObj:Router) { }

  ngOnInit(): void {
  }
  checkData(){
    this.serObj.getLoginCredential().subscribe((res)=>{
      this.studData=res;
      const data=this.studData.filter((item:any)=>(item.uid==this.uid)&&(item.upass==this.upass));
    if(data.length>0){
      this.serObj.signIn(this.uid);
      this.rouObj.navigate(['dashboard']);

    }else{
      alert("Invalid id or passward!!!");
      this.uid="";
      this.upass="";
    }
    });
        
    

  }
}
