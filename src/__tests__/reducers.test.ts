import { InitialStateType } from '../context';
import { ActionType, Types, appReducer } from '../context/reducers';
import { Release } from '../types';

const mockReleases: Release[] = [
  {
    id: 1,
    title: 'Mac Demarco 1',
    cover_image: 'release.jpg',
    year: '1995',
    style: ['Indie-Rock', 'Lo-fi'],
    genre: ['Rock'],
  },
  {
    id: 2,
    title: 'Mac Demarco 2',
    cover_image: 'release.jpg',
    year: '1998',
    style: ['Indie-Rock'],
    genre: ['Rock'],
  },
];

describe('appReducer', () => {
  const initialState: InitialStateType = {
    searchTerm: '',
    currentPage: 1,
    perPage: 10,
    totalPages: 0,
    isLoading: false,
    releases: [],
  };

  it('should set search term', () => {
    const action: ActionType = {
      type: Types.SetSearchTerm,
      payload: 'test',
    };

    const newState = appReducer(initialState, action);

    expect(newState.searchTerm).toBe('test');
  });

  it('should set current page', () => {
    const action: ActionType = {
      type: Types.SetCurrentPage,
      payload: 2,
    };

    const newState = appReducer(initialState, action);

    expect(newState.currentPage).toBe(2);
  });

  it('should set per page', () => {
    const action: ActionType = {
      type: Types.SetPerPage,
      payload: 20,
    };

    const newState = appReducer(initialState, action);

    expect(newState.perPage).toBe(20);
  });

  it('should set total pages', () => {
    const action: ActionType = {
      type: Types.SetTotalPages,
      payload: 5,
    };

    const newState = appReducer(initialState, action);

    expect(newState.totalPages).toBe(5);
  });

  it('should set loading state', () => {
    const action: ActionType = {
      type: Types.SetIsLoading,
      payload: true,
    };

    const newState = appReducer(initialState, action);

    expect(newState.isLoading).toBe(true);
  });

  it('should set releases', () => {
    const releases = mockReleases;
    const action: ActionType = {
      type: Types.SetReleases,
      payload: mockReleases,
    };

    const newState = appReducer(initialState, action);

    expect(newState.releases).toEqual(releases);
  });

  it('should return the current state for unknown action type', () => {
    const action: ActionType = {};

    const newState = appReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
