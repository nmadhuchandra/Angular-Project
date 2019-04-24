import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  constructor (private httpService: HttpClient){
    
  }
  
  posts: string [];
  selectedPost=null;
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
  onSelect(body){
    this.selectedPost=body;
  }
}
