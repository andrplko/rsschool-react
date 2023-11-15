import { Dispatch } from 'react';
import { Release } from '../types';
import { ActionType, Types } from './reducers';

const setSearchTerm = (dispatch: Dispatch<ActionType>, payload: string) => {
  dispatch({ type: Types.SetSearchTerm, payload });
};

const setCurrentPage = (dispatch: Dispatch<ActionType>, payload: number) => {
  dispatch({ type: Types.SetCurrentPage, payload });
};

const setPerPage = (dispatch: Dispatch<ActionType>, payload: number) => {
  dispatch({ type: Types.SetPerPage, payload });
};

const setTotalPages = (dispatch: Dispatch<ActionType>, payload: number) => {
  dispatch({ type: Types.SetTotalPages, payload });
};

const setIsLoading = (dispatch: Dispatch<ActionType>, payload: boolean) => {
  dispatch({ type: Types.SetIsLoading, payload });
};

const setReleases = (dispatch: Dispatch<ActionType>, payload: Release[]) => {
  dispatch({ type: Types.SetReleases, payload });
};

export {
  setSearchTerm,
  setCurrentPage,
  setPerPage,
  setTotalPages,
  setIsLoading,
  setReleases,
};
