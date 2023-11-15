import {
  createContext,
  useReducer,
  Dispatch,
  useContext,
  ReactNode,
} from 'react';
import { Release } from '../types';
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_TOTAL_PAGES,
  LOCAL_STORAGE_SEARCH_TERM,
} from '../constants';
import { ActionType, appReducer } from './reducers';

export type InitialStateType = {
  searchTerm: string;
  currentPage: number;
  perPage: number;
  totalPages: number;
  isLoading: boolean;
  releases: Release[];
};

const initialState: InitialStateType = {
  searchTerm: localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '',
  perPage: DEFAULT_PER_PAGE,
  currentPage: DEFAULT_CURRENT_PAGE,
  totalPages: DEFAULT_TOTAL_PAGES,
  isLoading: true,
  releases: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
