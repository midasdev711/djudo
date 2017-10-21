import { Action } from '@ngrx/store';
import { Comment } from '../comments';

export enum CommentActionTypes {
  LOAD_COMMENTS = '[Comments] Load Comments',
  LOAD_COMMENTS_SUCCESS = '[Comments] Load Comments SUCCESS',
  POST_COMMENT = '[Comment] Post Comment',
  POST_COMMENT_SUCCESS = '[Comment] Post Comment SUCCESS',
  EDIT_COMMENT = '[Comment] Edit Comment',
  EDIT_COMMENT_SUCCESS = '[Comment] Edit Comment SUCCESS',
}

export class LoadCommentsAction implements Action {
  readonly type = CommentActionTypes.LOAD_COMMENTS;
}

export class LoadCommentsActionSUCCESS implements Action {
  readonly type = CommentActionTypes.LOAD_COMMENTS_SUCCESS;
  constructor(public payload: Comment[]) {}
}

export class PostCommentsAction implements Action {
  readonly type = CommentActionTypes.POST_COMMENT;
  constructor(public payload: Comment) {}
}

export class PostCommentsActionSUCCESS implements Action {
  readonly type = CommentActionTypes.POST_COMMENT_SUCCESS;
  constructor(public payload: Comment) {}
}

export class EditCommentsAction implements Action {
  readonly type = CommentActionTypes.EDIT_COMMENT;
  constructor(public payload: Comment) {}
}

export class EditCommentsActionSUCCESS implements Action {
  readonly type = CommentActionTypes.EDIT_COMMENT_SUCCESS;
  constructor(public payload: Comment) {}
}

export type CommentActions = LoadCommentsActionSUCCESS | PostCommentsActionSUCCESS | EditCommentsActionSUCCESS;