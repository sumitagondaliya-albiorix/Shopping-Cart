import { ActionCreatorProps, LoadAPI, createAction, props } from '@ngrx/store';

export const LoadAPI = createAction('[Task] LoadAPI', props<{productAPI}>());

