export interface Release {
  id: number;
  title: string;
  cover_image: string;
  year: string;
  style: string[];
  genre: string[];
}

export interface ReleaseResponse {
  id: number;
  artists: Array<{ name: string }>;
  title: string;
  tracklist: Array<{ title: string; duration: string }>;
}

export interface PaginationData {
  page: number;
  per_page: number;
  pages: number;
  items?: number;
}

export interface ReleaseData {
  id: number;
  country: string;
  year: string;
  format: string[];
  label: string[];
  type: string;
  genre: string[];
  style: string[];
  barcode: string[];
  master_id: number;
  master_url: string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: {
    want: number;
    have: number;
  };
  format_quantity: number;
  formats: Array<{
    name: string;
    qty: string;
    descriptions: string[];
  }>;
}

export type ReleasesResponse = {
  results: ReleaseData[];
  pagination: PaginationData;
};
