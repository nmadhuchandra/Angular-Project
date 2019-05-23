import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  constructor (private httpService: HttpClient, private route: ActivatedRoute, public api: ApiService){
    
  }
  
  posts: any;
  user: any;
  newPost: any;
  display: any;
  value: any;
  selectedPost=null;
  ObjectPost=null;
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.selectedPost=params;
      console.log(params) //log the entire params object
      // console.log(params['postId']) //log the value of id
    });
    this.getPostMethod();
    this.fetchData();

  }
  private fetchData()
  {
    this.api.getData("posts/"+this.selectedPost.postId).subscribe(response=>{ 
      this.posts = response;
      this.userData();

      console.log(this.posts);
      
      
    },
      (err:HttpErrorResponse) => {
        console.log(err.message)
      }
    );
  }
  private findId(value, id) {
    var categoryArray = id;
    var idToLookFor = value;
    for (var i = 0; i < categoryArray.length; i++) {
        if (categoryArray[i].id == idToLookFor) {
            return(categoryArray[i].product);
        }
    }
  }
  private getPostMethod()
  {
    this.api.getData("posts").subscribe(val=>{
      this.newPost=val;
      debugger;
      this.value=this.userData();
      this.display=this.findId(this.value,this.newPost);
      console.log(this.display);
      console.log(this.user);
    });
  }
  private userData()
  {
   
    this.api.getData("users").subscribe(val1=>{
      this.user=val1;
      
    },
    (err:HttpErrorResponse) => {
      console.log(err.message)
    }
    );
  }
  // ngOnInit(){

  //   this.httpService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  //   data =>
  //   {
  //     this.posts = data as string[];
  //   },
  //     (err:HttpErrorResponse) => {
  //       console.log(err.message)
  //   }
  //   );
  // }
  onSelect(selectedId){
    var obj=this.posts.filter(function (sel)
    {
      return sel;
    });
    this.selectedPost=selectedId;
    console.log(this.posts[0]);

    console.log(this.selectedPost);
    
}
}
