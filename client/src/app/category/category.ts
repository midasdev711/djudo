import {Post} from '@app/posts/posts';

export interface Category {
  id: number;
  title: string;
  slug: string;
  posts?: Post[];
}
