import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addBook } from '../redux/booksSlice'; 

const BookList = () => {
  const { category } = useParams(); 
  const [searchTerm, setSearchTerm] = useState(''); 

  // Access books data from Redux store
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  // Filter books by category if provided
  const categoryFilteredBooks = category
    ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
    : books;

  // Further filter by search term (title or author)
  const filteredBooks = categoryFilteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
  };

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1, 
      title: 'New Book',
      author: 'New Author',
      category: 'Fiction', 
    };
    dispatch(addBook(newBook)); // Dispatch action to add the new book to the store
  };

  return (
    <div className="book-list">
      <h2>{category ? `${category} Books` : 'Browse Books'}</h2>

      
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or author"
        />
      </div>

      

      
      <div className="book-cards">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>Category: {book.category}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
