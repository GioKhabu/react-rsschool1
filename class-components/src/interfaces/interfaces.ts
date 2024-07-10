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