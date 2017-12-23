import {TypeAheadActions, TypeAheadActionTypes} from '@app/type-ahead/type-ahead.actions';
import {Post} from '@app/posts/posts';

export interface TypeAheadState {
  searchResults: Post[]
}

const INITIAL_STATE = {
  searchResults: []
}

export function typeAheadReducer(state = INITIAL_STATE, action: TypeAheadActions) {
  switch(action.type) {
    case TypeAheadActionTypes.GET_SEARCH_RESULTS_SUCCESS:
      return { ...state, searchResults: action.payload }
  }
}
