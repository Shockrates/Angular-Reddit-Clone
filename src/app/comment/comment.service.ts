import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCommentPayload } from './create-comment-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  createComment(commentPayload: CreateCommentPayload): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/comments/', commentPayload);
  }

  getAllCommentsForPost(postId: number): Observable<CreateCommentPayload[]> {
    return this.http.get<CreateCommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId);
  }

  getAllCommentsByUsert(username: string): Observable<CreateCommentPayload[]> {
    return this.http.get<CreateCommentPayload[]>('http://localhost:8080/api/comments/by-username/' + username);
  }
}
