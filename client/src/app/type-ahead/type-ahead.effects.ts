import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {TypeAheadService} from '@app/type-ahead/type-ahead.service';
import {GetSearchResults, GetSearchResultsSuccess, TypeAheadActionTypes} from '@app/type-ahead/type-ahead.actions';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import {Post} from '@app/posts/posts';

@Injectable()
export class TypeAheadEffects {

  constructor(private action$: Actions,
              private typeAheadService: TypeAheadService) { }

  @Effect() searchTerm = this.action$
    .ofType(TypeAheadActionTypes.GET_SEARCH_RESULTS)
    .map((action: GetSearchResults) => action.payload)
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: Post[] | string) => this.typeAheadService.searchFor(<string>term))
    .map(results => new GetSearchResultsSuccess(results));
}
