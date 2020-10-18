import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTitleComponent implements OnInit {

  @Input() posts$: Array<PostModel>;
  faComments = faComments; 

  constructor(private postService: PostService) { 
    this.postService.getAllPosts().subscribe(post => {
    this.posts$  = post;
      })
  }

  ngOnInit(): void {
  }

  goToPost(id: number): void{
    
  }
}
