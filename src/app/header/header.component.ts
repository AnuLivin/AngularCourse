import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../shared/service/course-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpSerObj:CourseServiceService,public rou_Obj:Router) { }

  ngOnInit(): void {
  }
  logout(){
    if(confirm("Are you sure to logout?")){
      this.httpSerObj.signOut();
      this.rou_Obj.navigate(['/']);
    }
  }

}
