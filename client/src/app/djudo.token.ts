import { InjectionToken } from '@angular/core';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '@app/state';

export const API_URL = new InjectionToken('apiUrl');
export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState>>('ROOT_REDUCER');
