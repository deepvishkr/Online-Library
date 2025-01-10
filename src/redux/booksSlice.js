import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { 
        id: 1, 
        title: 'The Great Gatsby', 
        author: 'F. Scott Fitzgerald', 
        category: 'Fiction', 
        description: 'A classic novel set in the 1920s, depicting the disillusionment of the American Dream.', 
        rating: 4.5 
      },
      { 
        id: 2, 
        title: '1984', 
        author: 'George Orwell', 
        category: 'Sci-Fi', 
        description: 'A dystopian novel about a totalitarian regime that uses surveillance to control the people.',
        rating: 4.8 
      },
      { 
        id: 3, 
        title: 'To Kill a Mockingbird', 
        author: 'Harper Lee', 
        category: 'Fiction', 
        description: 'A story of racial injustice in the Deep South, seen through the eyes of a young girl.',
        rating: 4.7 
      },
      { 
        id: 4, 
        title: 'Sapiens', 
        author: 'Yuval Noah Harari', 
        category: 'Non-Fiction', 
        description: 'A brief history of humankind, exploring the evolution of humans and their impact on the world.',
        rating: 4.6 
      },
      { 
        id: 5, 
        title: 'Dune', 
        author: 'Frank Herbert', 
        category: 'Sci-Fi', 
        description: 'A science fiction epic set on the desert planet Arrakis, focusing on politics, religion, and ecology.',
        rating: 4.9 
      },
      { 
        id: 6, 
        title: 'Becoming', 
        author: 'Michelle Obama', 
        category: 'Biography', 
        description: 'The memoir of the former First Lady, reflecting on her life, values, and experiences.',
        rating: 4.8 
      },
      { 
        id: 7, 
        title: 'The Silent Patient', 
        author: 'Alex Michaelides', 
        category: 'Mystery', 
        description: 'A psychological thriller about a woman who shot her husband and her subsequent silence.',
        rating: 4.3 
      }
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});
export const list = initialState.books;

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;

