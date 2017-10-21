import { AppState } from '@app/state/index';
import { CommentActions, CommentActionTypes } from './comment.actions';
import { Comment, CommentsState } from '../comments';

const INITIAL_STATE: CommentsState = {
  comments: [],
  comment: {
    id: null,
    content_type: null,
    object_id: null,
    parent: null,
    content: '',
    reply_count: null,
    timestamp: ''
  }
}

export function commentsReducer(state = INITIAL_STATE, action: CommentActions): CommentsState {
  switch(action.type) {
    case CommentActionTypes.LOAD_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload }
    case CommentActionTypes.POST_COMMENT_SUCCESS:
      let findComment = (comment) => comment.id == action.payload.id;
      let inStore = state.comments.some(findComment);
      return {
        ...state,
        comments: !inStore ? [...state.comments, action.payload] : [...state.comments]
      };
    case CommentActionTypes.EDIT_COMMENT_SUCCESS:
      let updatedList = state.comments.map(comment => comment.id == action.payload.id
        ? { ...comment, ...action.payload } : comment);
      return {
        ...state,
        comments: updatedList
      }
    default:
      return state;
  }
}