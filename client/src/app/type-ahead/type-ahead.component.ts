import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {AppState} from '@app/state';
import {GetSearchResults} from '@app/type-ahead/type-ahead.actions';

@Component({
  selector: 'djudo-type-ahead',
  template: `
    <div class="type-ahead-container">
      <input type="search"
             [(ngModel)]="searchTerm"
             (keypress)="search(searchTerm)">
    </div>
  `,
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent {

  public searchTerm: string;

  constructor(private store: Store<AppState>) { }

  public search(searchTerm): void {
    this.store.dispatch(new GetSearchResults(searchTerm))
  }

}
