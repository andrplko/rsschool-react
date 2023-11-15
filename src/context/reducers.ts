import { InitialStateType } from '.';
import { Release } from '../types';

export enum Types {
  SetSearchTerm = 'SET_SEARCH_TERM',
  SetCurrentPage = 'SET_CURRENT_PAGE',
  SetPerPage = 'SET_PER_PAGE',
  SetTotalPages = 'SET_TOTAL_PAGES',
  SetIsLoading = 'SET_IS_LOADING',
  SetReleases = 'SET_RELEASES',
}

export type ActionType =
  | { type: Types.SetSearchTerm; payload: string }
  | { type: Types.SetCurrentPage; payload: number }
  | { type: Types.SetPerPage; payload: number }
  | { type: Types.SetTotalPages; payload: number }
  | { type: Types.SetIsLoading; payload: boolean }
  | { type: Types.SetReleases; payload: Release[] }
  | Record<string, never>;

const appReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case Types.SetSearchTerm: {
      return { ...state, searchTerm: action.payload };
    }
    case Types.SetCurrentPage: {
      return { ...state, currentPage: action.payload };
    }
    case Types.SetPerPage: {
      return { ...state, perPage: action.payload };
    }
    case Types.SetTotalPages: {
      return { ...state, totalPages: action.payload };
    }
    case Types.SetIsLoading: {
      return { ...state, isLoading: action.payload };
    }
    case Types.SetReleases: {
      return { ...state, releases: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { appReducer };
