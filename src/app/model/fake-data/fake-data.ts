import { otherCategory } from '../category/category';
import { PantryData } from '../pantry/pantry';

export class FakeData {
  static pantry: PantryData = {
    code: 'XHTJ',
    users: ['test@test.com', 'bro@test.com'],
    stores: ['Walmart', 'Target', 'Kroger', 'Any'],
    categories: [
      { ...otherCategory },
      { name: 'Produce', color: '#4CAF50', textColor: 'black' },
      { name: 'Dairy', color: '#FFC107', textColor: 'black' },
      { name: 'Meat', color: '#FF5722', textColor: 'white' },
      { name: 'Bakery', color: '#9C27B0', textColor: 'white' },
      { name: 'Grains', color: '#607D8B', textColor: 'white' },
      { name: 'Condiments', color: '#ffffff', textColor: 'black' },
    ],
    items: [
      {
        name: 'Apples',
        quantity: 5,
        category: { name: 'Produce', color: '#4CAF50', textColor: 'black' },
        store: 'Walmart',
      },
      {
        name: 'Milk',
        quantity: 1,
        category: { name: 'Dairy', color: '#FFC107', textColor: 'black' },

        store: 'Target',
        purpose: 'Cereal',
        expiration: new Date('2023-10-01'),
      },
      {
        name: 'Chicken',
        quantity: 2,
        category: { name: 'Meat', color: '#FF5722', textColor: 'black' },

        store: 'Kroger',
        purpose: 'Pesto pasta, Quesadillas',
        expiration: new Date('2023-10-05'),
      },
      {
        name: 'Bread',
        quantity: 1,
        category: { name: 'Bakery', color: '#9C27B0', textColor: 'black' },

        store: 'Walmart',
        purpose: 'Sandwiches, Grilled cheese',
        expiration: new Date('2023-10-03'),
      },
      {
        name: 'Eggs',
        quantity: 12,
        category: { name: 'Dairy', color: '#FFC107', textColor: 'black' },

        store: 'Target',
        purpose: 'Breakfast',
        expiration: new Date('2023-10-10'),
      },
    ],
    grocery: [
      {
        name: 'Rice',
        quantity: 2,
        category: { name: 'Grains', color: '#607D8B', textColor: 'black' },
        store: 'Walmart',
      },
      {
        name: 'Pasta',
        quantity: 3,
        category: { name: 'Grains', color: '#607D8B', textColor: 'black' },
        store: 'Target',
      },
      {
        name: 'Tomato Sauce',
        quantity: 1,
        category: { name: 'Condiments', color: '#ffffff', textColor: 'black' },

        store: 'Kroger',
      },
      {
        name: 'Cheese',
        quantity: 1,
        category: { name: 'Dairy', color: '#FFC107', textColor: 'black' },
        store: 'Walmart',
      },
      {
        name: 'Lettuce',
        quantity: 1,
        category: { name: 'Produce', color: '#4CAF50', textColor: 'black' },
        store: 'Target',
      },
      {
        name: 'Onion',
        quantity: 2,
        category: { name: 'Produce', color: '#4CAF50', textColor: 'black' },
        store: 'Kroger',
      },
    ],
    recipes: [
      {
        name: 'Pesto Pasta',
        ingredients: [
          { name: 'Pasta', store: 'Target' },
          { name: 'Chicken', store: 'Kroger' },
          { name: 'Tomato Sauce', store: 'Kroger' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Pot', store: 'Walmart' },
          { name: 'Water', store: 'Walmart' },
          { name: 'Salt', store: 'Walmart' },
          { name: 'Pesto', store: 'Walmart' },
          { name: 'Test', store: 'Walmart' },
          { name: 'Spoon', store: 'Walmart' },
          { name: 'Ur mom', store: 'Walmart' },
        ],
        note: 'Use the leftover chicken',
      },
      {
        name: 'Quesadillas',
        ingredients: [
          { name: 'Chicken', store: 'Kroger' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Tortillas', store: 'Walmart' },
          { name: 'Salsa', store: 'Target' },
        ],
        note: 'best for lunch',
      },
      {
        name: 'Grilled Cheese',
        ingredients: [
          { name: 'Bread', store: 'Walmart' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Butter', store: 'Kroger' },
        ],
        note: "Parker's favorite",
      },
      {
        name: 'Breakfast Burrito',
        ingredients: [
          { name: 'Eggs', store: 'Target' },
          { name: 'Tortillas', store: 'Walmart' },
          { name: 'Cheese', store: 'Walmart' },
          { name: 'Salsa', store: 'Target' },
        ],
      },
    ],
  };
}
