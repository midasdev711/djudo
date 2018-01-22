import {Category} from '@app/category/category';

type num = number | null;

export interface Post {
    url?: string;
    id: number;
    title: string;
    slug: string;
    description: string;
    image?: string;
    image_url?: string;
    body: string;
    published: boolean;
    created: DateTimeFormat | null | string;
    category?: string;
    category_obj?: Category;
    comments: Comment[];
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
