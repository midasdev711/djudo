import { Injectable } from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {TypeAheadService} from '@app/type-ahead/type-ahead.service';
import {GetSearchResultsSuccess, TypeAheadActionTypes} from '@app/type-ahead/type-ahead.actions';

@Injectable()
export class TypeAheadEffects {

  constructor(private action$: Actions,
              private typeAheadService: TypeAheadService) { }

  @Effect() searchTerm = this.action$
    .ofType(TypeAheadActionTypes.GET_SEARCH_RESULTS)
    .map(toPayload)
    .switchMap(term => this.typeAheadService.searchFor(term))
    .map(results => new GetSearchResultsSuccess(results))
}
