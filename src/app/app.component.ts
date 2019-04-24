import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTML';
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
