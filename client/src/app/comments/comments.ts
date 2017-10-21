export interface Comment {
  id: number | null;
  user?: number | null;
  object_id: number | null;
  parent: string | null;
  content_type: number | null;
  content: string;
  reply_count?: number | null;
  timestamp: string;
}

export interface CommentsState {
  comments: Comment[];
  comment: Comment;
}