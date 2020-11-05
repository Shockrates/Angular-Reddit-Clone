import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  displayAll: boolean;

  constructor(private postService: PostService) { 
    this.postService.getAllPosts().subscribe(post => {
      this.posts  = post.reverse();
        })
    
  }

  ngOnInit(): void {
   
    
  }

  //---------CODE TO SHOW LESS POSTS 
  // private getAllPosts(hidePosts: boolean){
  //   this.postService.getAllPosts().subscribe(data => {
  //     if (data.length >= 5 && hidePosts) {
  //       this.posts  = data.reverse().splice(0, 4);
  //       this.displayAll = true;
        
  //     } else {
  //       this.posts  = data.reverse();
  //     }
  //   }, error =>{
  //     throwError(error);
  //   });
  // }

  // showAllPosts(){
  //   this.getAllPosts(false);
  // }

  

}
