export interface Item {
  name: string;
  birthYear: string;
  eyeColor: string;
  skinColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
}

export interface SearchState {
  searchTerm: string;
}

export interface StarState extends SearchState {
  items: Item[];
}

export interface ItemsProps {
  items: Item[];
}

export interface ApiResponse {
  results: ApiItem[];
}

export interface ApiItem {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
}
