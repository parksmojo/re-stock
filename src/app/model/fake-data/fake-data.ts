import { PantryData } from '../pantry/pantry';

export class FakeData {
  static pantry: PantryData = {
    code: 'XHTJ',
    users: ['test@test.com', 'bro@test.com'],
    stores: ['Walmart', 'Target', 'Kroger'],
    categories: ['Produce', 'Dairy', 'Meat', 'Bakery'],
    items: [
      { name: 'Apples', quantity: 5, category: 'Produce', store: 'Walmart' },
      {
        name: 'Milk',
        quantity: 1,
        category: 'Dairy',
        store: 'Target',
        purpose: 'Cereal',
        expiration: new Date('2023-10-01'),
      },
      {
        name: 'Chicken',
        quantity: 2,
        category: 'Meat',
        store: 'Kroger',
        purpose: 'Pesto pasta, Quesadillas',
        expiration: new Date('2023-10-05'),
      },
      {
        name: 'Bread',
        quantity: 1,
        category: 'Bakery',
        store: 'Walmart',
        purpose: 'Sandwiches, Grilled cheese',
        expiration: new Date('2023-10-03'),
      },
      {
        name: 'Eggs',
        quantity: 12,
        category: 'Dairy',
        store: 'Target',
        purpose: 'Breakfast',
        expiration: new Date('2023-10-10'),
      },
    ],
    grocery: [
      { name: 'Rice', quantity: 2, category: 'Grains', store: 'Walmart' },
      { name: 'Pasta', quantity: 3, category: 'Grains', store: 'Target' },
      {
        name: 'Tomato Sauce',
        quantity: 1,
        category: 'Condiments',
        store: 'Kroger',
      },
      { name: 'Cheese', quantity: 1, category: 'Dairy', store: 'Walmart' },
      { name: 'Lettuce', quantity: 1, category: 'Produce', store: 'Target' },
      { name: 'Onion', quantity: 1, category: 'Produce', store: 'Kroger' },
    ],
    recipes: [
      {
        name: 'Pesto Pasta',
        ingredients: [
          { name: 'Pasta', store: 'Target' },
          { name: 'Chicken', store: 'Kroger' },
          { name: 'Tomato Sauce', store: 'Kroger' },
          { name: 'Cheese', store: 'Walmart' },
        ],
        description: 'Cook pasta, cook chicken, mix together with sauce',
      },
      {
        name: 'Quesadillas',
        ingredients: [
          { name: 'Chicken', store: 'Kroger' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Tortillas', store: 'Walmart' },
          { name: 'Salsa', store: 'Target' },
        ],
        description: 'Cook chicken, melt cheese on tortilla, add salsa',
      },
      {
        name: 'Grilled Cheese',
        ingredients: [
          { name: 'Bread', store: 'Walmart' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Butter', store: 'Kroger' },
        ],
        description: 'Butter bread, melt cheese between slices',
      },
      {
        name: 'Breakfast Burrito',
        ingredients: [
          { name: 'Eggs', store: 'Target' },
          { name: 'Tortillas', store: 'Walmart' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Salsa', store: 'Target' },
        ],
        description: 'Scramble eggs, melt cheese on tortilla, add salsa',
      },
    ],
  };
}
