import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';
import { CreateCommentPayload } from 'src/app/comment/create-comment-payload';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string;
  posts: PostModel[];
  comments: CreateCommentPayload[];
  postLength: number;
  commentLength: number;


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private commentService: CommentService) {
    this.name = this.activatedRoute.snapshot.params.name;

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data.reverse();
      this.postLength = data.length;
    });

    this.commentService.getAllCommentsByUsert(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length
    })
   }

   

  ngOnInit(): void {
  }

}
