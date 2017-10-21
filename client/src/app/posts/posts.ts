type num = number | null;

export interface Post {
    id: number;
    title: string;
    slug: string;
    description: string;
    body: string;
    published: boolean;
    created: DateTimeFormat | null;
    category: string;
    comments: Comment[];
}

export interface Category {
    id: number;
    title: string;
    slug: string;
}

export interface Comment {
  id: num;
  content_type: num;
  object_id: num;
  parent: num;
  content: string;
  reply_count: num;
  timestamp: string;
}
