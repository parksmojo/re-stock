export interface Category {
  name: string;
  color: string;
  textColor: 'black' | 'white';
}

export const otherCategory: Category = {
  name: 'Other',
  color: '#a9abaa',
  textColor: 'black',
};
