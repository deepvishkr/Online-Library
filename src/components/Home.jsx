import React from 'react';
import CategoryList from './CategoryList';
import BookCard from './BookCard';

const popularBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
  { id: 2, title: '1984', author: 'George Orwell', category: 'Sci-Fi' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction' }
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to The Online Library</h1>
      <p>Explore the world of books in various categories.</p>
      
      <CategoryList />

      <h2>Popular Books</h2>
      <div className="popular-books">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <p><a href="/browse">View more books...</a></p>
    </div>
  );
};

export default Home;
