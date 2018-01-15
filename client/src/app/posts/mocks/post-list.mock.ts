import {Post} from '@app/posts/posts';

export const postListMock: Post[] = [
  {
    "url": "http://localhost:8000/api/posts/1/",
    "id": 1,
    "title": "Vegan penne",
    "slug": "vegan-penne",
    "image": null,
    "image_url": null,
    "description": "a delicious vegan twist on a classic Italian dish",
    "body": "Recipe coming soon!",
    "published": true,
    "created": "2017-11-18T22:01:24.256524Z",
    "category_obj": {
      "id": 2,
      "title": "italian",
      "slug": "italian"
    },
    "comments": []
  },
  {
    "url": "http://localhost:8000/api/posts/2/",
    "id": 2,
    "title": "Vegan Tacos",
    "slug": "vegan-tacos",
    "image": null,
    "image_url": null,
    "description": "",
    "body": "vegan tacos",
    "published": true,
    "created": "2017-11-25T23:16:07.473645Z",
    "category_obj": {
      "id": 1,
      "title": "mexican",
      "slug": "mexican"
    },
    "comments": []
  },
  {
    "url": "http://localhost:8000/api/posts/3/",
    "id": 3,
    "title": "Oscar B",
    "slug": "oscar-b",
    "image": null,
    "image_url": null,
    "description": "is in the house",
    "body": "whatup though?!",
    "published": true,
    "created": "2017-12-12T00:13:58.418705Z",
    "category_obj": {
      "id": 1,
      "title": "mexican",
      "slug": "mexican"
    },
    "comments": []
  }
];
