import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  constructor (private httpService: HttpClient, private api:ApiService, private route:ActivatedRoute){
    
  }
  user: any;
  selectedvalue:any;
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.selectedvalue=params;
    })
    // this.httpService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
    // data =>
    // {
    //   this.posts = data as string[];
    // },
    //   (err:HttpErrorResponse) => {
    //     console.log(err.message)
    // }
    // );
   this.getMethod();
    
  }
  private getMethod()
  {
    this.api.getData("users").subscribe(val=>{
      this.user=val;
      console.log(this.user);
    });
  }
}
