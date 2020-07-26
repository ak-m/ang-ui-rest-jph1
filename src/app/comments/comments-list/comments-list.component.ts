
import { Component, OnInit } from '@angular/core';
import {Comment} from '../Comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  title:string = "CommentsListComponent";
  comments: Comment[];

  constructor(private _commentsService:CommentsService) {
    console.log("CommentsListComponent.constructor called");
   }

  ngOnInit(): void {
    console.log("CommentsListComponent.ngOnInit called");
    //this.getMockComments();
    this.getRealComments();
  }

  editComment(comment2edit:Comment): void {
    console.log(`CommentsListComponent.editComment called ${JSON.stringify(comment2edit)}`);

  }

  deleteComment(comment2delete:Comment): void {
    console.log(`CommentsListComponent.deleteComment called ${comment2delete.id}`);
    this.comments = this.comments.filter(c => (c.id != comment2delete.id));
    console.log(`DETELE-FROM-UI: After deleting comments in UI size: ${this.comments.length}`);
    
    this._commentsService.deleteComment(920192)
                      .subscribe((response) => {
                        console.log(`DETELE-FROM-BACKEND: delete response from sever ${JSON.stringify(response)}`);
                       }, (error) => {
                         console.error(`DETELE-FROM-BACKEND: Got error while deleting comments ${error.message}`);
                       })
  }

  getRealComments(): void {
    console.log("CommentsListComponent.getRealComments called");

   this._commentsService.getAllComments()
                      .subscribe((data) => {
                        console.log(`got comments from service ${data.length}`);
                        this.comments = data;
                      }, (error) => {
                        console.error(`Got error while getting comments ${error.message}`);
                      })
  }

  getMockComments(): void {
     this.comments = [
      {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
      },
      {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
      },
      {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
      }
    ];
  }


}
