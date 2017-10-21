import { Component, Input } from '@angular/core';
import {Comment} from '@app/posts/posts';

@Component({
  selector: 'djudo-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() comment: Comment;
}
