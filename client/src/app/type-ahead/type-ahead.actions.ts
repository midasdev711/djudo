import {Action} from '@ngrx/store';
import {Post} from '@app/posts/posts';

export enum TypeAheadActionTypes {
  GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS',
  GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS'
}

export class GetSearchResults implements Action {
  readonly type = TypeAheadActionTypes.GET_SEARCH_RESULTS;
  constructor(public payload: Post[]) {}
}

export class GetSearchResultsSuccess implements Action {
  readonly type = TypeAheadActionTypes.GET_SEARCH_RESULTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export type TypeAheadActions = GetSearchResultsSuccess;
