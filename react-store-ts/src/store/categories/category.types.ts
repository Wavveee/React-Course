export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "cattegory/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "cattegory/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "cattegory/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
}