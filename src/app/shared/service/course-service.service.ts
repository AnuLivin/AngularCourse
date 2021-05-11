import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {lhurl,loginurl,courseurl,stdurl} from 'src/app/shared/constant/constant';
import { ICourse } from '../interface/course.modal';
import { IInstitute } from '../interface/institute.modal';
import { ILogin } from '../interface/login.modal';
import { IStudent } from '../interface/student.modal';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpObj:HttpClient) { }
  // ------------------enrollment---------------------
  getUserRecord():Observable<IStudent[]>{
    return this.httpObj.get<IStudent[]>(stdurl);
  }
  deleteRecord(id:any){
    const url:string=`${stdurl}/${id}`;
    return this.httpObj.delete(url);
  }
  addRecord(std:any){
    return this.httpObj.post(stdurl,std);
  }
  getSingleRecord(id:number){
    const url:string=`${stdurl}/${id}`;
    return this.httpObj.get<IStudent>(url);
  }
  updateRecord(std:any){
    const url:string=`${stdurl}/${std.id}`;
    return this.httpObj.put(url,std);
  }
  // ------------------light house-------------------
  getLhRecord():Observable<IInstitute[]>{
    return this.httpObj.get<IInstitute[]>(lhurl);
  }
  deleteLhRecord(id:any){
    const url:string=`${lhurl}/${id}`;
    return this.httpObj.delete(url);
  }
  addLhRecord(lh:any){
    return this.httpObj.post(lhurl,lh);
  }
  getSingleLhRecord(id:number){
    const url:string=`${lhurl}/${id}`;
    return this.httpObj.get<IInstitute[]>(url);
  }
  updateLhRecord(lh:any){
    const url:string=`${lhurl}/${lh.id}`;
    return this.httpObj.put(url,lh);
  }
  //--------------------course------------
  getCourseRecord():Observable<ICourse[]>{
    return this.httpObj.get<ICourse[]>(courseurl);
  }
  deleteCourseRecord(id:any){
    const url:string=`${courseurl}/${id}`;
    return this.httpObj.delete(url);
  }
  addCourseRecord(cour:any){
    return this.httpObj.post(courseurl,cour);
  }
  getSingleCourseRecord(id:number){
    const url:string=`${courseurl}/${id}`;
    return this.httpObj.get<ICourse>(url);
  }
  updateCourseRecord(cour:any){
    const url:string=`${courseurl}/${cour.id}`;
    return this.httpObj.put(url,cour);
  }
  getLoginCredential(){
    return this.httpObj.get<ILogin[]>(loginurl);
  }
  signIn(user:any){
    sessionStorage.setItem("user",user);
  }
  signOut(){
    sessionStorage.removeItem("user");
  }
}
