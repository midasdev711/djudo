import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '@app/state';
import {GetSearchResults} from '@app/type-ahead/type-ahead.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'djudo-type-ahead',
  template: `
    <form [formGroup]="form" class="type-ahead-form" autocomplete="off">
      <mat-form-field class="type-ahead-full-width">
        <input matInput
               placeholder="search"
               type="search"
               formControlName="searchTerm"
               (keypress)="search()">
      </mat-form-field>
      <ng-container *ngIf="(typeAhead$ | async) !== undefined && form.value.searchTerm !== ''">
        <div class="type-ahead-container">
          <ng-container *ngIf="(typeAhead$ | async)?.searchResults.length >= 1; else noSearch">
            <ul>
              <li *ngFor="let term of (typeAhead$ | async)?.searchResults"
                  (click)="goToPost(term.id)">
                {{ term.title }}
              </li>
            </ul>
          </ng-container>

          <ng-template #noSearch>
            <p>no search results.</p>
          </ng-template>
        </div>
      </ng-container>
    </form>
  `,
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent {

  public form: FormGroup;
  public typeAhead$: Observable<any>;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder,
              private router: Router) {
    this.typeAhead$ = this.store.select(state => state.typeAhead);
    this.form = this.fb.group({
      'searchTerm': ''
    });
  }

  public search(): void {
    this.store.dispatch(new GetSearchResults(this.form.value.searchTerm));
  }

  public goToPost(id): void {
    this.router.navigate(['posts', id]);
  }
}
