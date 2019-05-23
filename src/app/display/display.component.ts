import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor (private route: ActivatedRoute, public api: ApiService){
    
  }
  
  posts: any;
  user: any;
  selectedPost=null;
  objectPost=null;
    
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.selectedPost=params;
      console.log(params) //log the entire params object
      // console.log(params['postId']) //log the value of id
    });
    // this.getPostData();
    this.fetchData();

  }
  private fetchData()
  {
    this.api.getData("posts/"+this.selectedPost.postId).subscribe(response=>{ 
      this.posts = response;
      this.userData();
    },
      (err:HttpErrorResponse) => {
        console.log(err.message)
      }
    );

  }
  private userData()
  {
    this.api.getData("users/"+this.posts.userId).subscribe(res=>{
     this.user= res;
    },
    (err:HttpErrorResponse) => {
      console.log(err.message)
    }
    );
  }
  // private getPostData()
  // {
  //   this.httpService.get(environment.apiUrl+'/posts/'+this.selectedPost.postId).subscribe(
  //   (data:any) =>
  //   {
  //     this.posts = data;
  //     console.log(this.posts)
  //   },
  //     (err:HttpErrorResponse) => {
  //       console.log(err.message)
  //   }
  //   );
  // }
 
 
}
