import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FacebookService, InitParams } from 'ngx-facebook';

import { AppState } from '@app/state/index';
import { PostsQuery } from '@app/posts/state/post.reducers';
import { SelectPostAction } from '@app/posts/state/post.actions';
import { Post } from '../posts';

@Component({
  selector: 'djudo-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class PostDetailComponent implements OnInit {

  post$: Store<Post>;

  constructor(private fb: FacebookService,
              private store: Store<AppState>,
              private router: ActivatedRoute ) {
    let initParams: InitParams = {
      appId: '354980508246758',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    let id = this.router.snapshot.params.id;
    this.store.dispatch(new SelectPostAction(id));
    this.post$ = this.store.select(PostsQuery.getPost);
  }

}
