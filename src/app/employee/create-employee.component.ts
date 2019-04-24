import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  constructor (private httpService: HttpClient){
    
  }
  posts: string [];
  ngOnInit(){
    this.httpService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
    data =>
    {
      this.posts = data as string[];
    },
      (err:HttpErrorResponse) => {
        console.log(err.message)
    }
    );
  }
}
