import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {AppState} from '@app/state';
import {GetSearchResults} from '@app/type-ahead/type-ahead.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'djudo-type-ahead',
  template: `    
    <form [formGroup]="form" class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput
               placeholder="search"
               type="search"
               formControlName="searchTerm"
               (keypress)="search()">
      </mat-form-field>
      <ng-container *ngIf="(typeAhead$ | async) !== undefined && form.value.searchTerm !== ''">
        <div *ngFor="let term of (typeAhead$ | async)?.searchResults">
          <ul>
            <li (click)="goToPost(term.id)" >{{ term.title }}</li>
          </ul>
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
      "searchTerm": [""]
    })
  }

  public search(): void {
    this.store.dispatch(new GetSearchResults(this.form.value.searchTerm));
    this.typeAhead$.subscribe(d => {
      if(d !== undefined) {
        console.log(d.searchResults);
      }
    });
  }

  public goToPost(id): void {
    this.router.navigate(['posts', id]);
  }
}
