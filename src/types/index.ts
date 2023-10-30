import { ReactNode } from 'react';

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
}

export interface IAppState {
  searchTerm: string;
  characters: ICharacter[];
  isLoading: boolean;
}

export interface IMainProps {
  characters: ICharacter[];
  isLoading: boolean;
}

export interface ISearchTermProps {
  setSearchTerm: (searchTerm: string) => void;
}

export type ChildrenProps = {
  children?: ReactNode;
};

export interface IErrorBoundaryState {
  hasError: boolean;
}

export type ApiCharactersData = { results: ICharacter[] } | undefined;

export interface ICharactersListProps {
  characters: ICharacter[];
}

export type PlaceholderProps = Record<string, never>;

export interface IErrorButtonState {
  error: Error | null;
}
