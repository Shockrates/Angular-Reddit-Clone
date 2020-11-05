import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  name: string;
  subredditId: number;
  subreddit: SubredditModel;
  posts: PostModel[];

  constructor(private postService: PostService, private subredditService: SubredditService, private activatedRoute: ActivatedRoute) {
    this.subredditId = this.activatedRoute.snapshot.params.id;
    console.log(this.subredditId);
    this.getSubredditById();
    this.getPostsBySubreddit();
   }

  ngOnInit(): void {
    //this.getSubredditById();
    //this.getPostsBySubreddit();
    //console.log(this.subreddit.name);
  
  }

  private getSubredditById(){
    this.subredditService.getSubreddit(this.subredditId).subscribe(data => {
      this.subreddit = data;
      this.name = this.subreddit.name;
    }, error => {
      throwError(error);
    });
  }

  private getPostsBySubreddit(){
    this.postService.getAllPostsBySubreddit(this.subredditId).subscribe(data => {
      this.posts = data;
    }, error => {
      throwError(error);
    });
  }

}
