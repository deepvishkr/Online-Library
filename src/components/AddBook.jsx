import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  // Simple form validation function
  const validateForm = () => {
    const errors = {};
    if (!book.title) errors.title = 'Title is required.';
    if (!book.author) errors.author = 'Author is required.';
    if (!book.category) errors.category = 'Category is required.';
    if (!book.description) errors.description = 'Description is required.';
    if (!book.rating || isNaN(book.rating) || book.rating < 1 || book.rating > 5) {
      errors.rating = 'Rating must be a number between 1 and 5.';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBook = {
        ...book,
        id: Date.now(), // Simple way to generate a unique ID
      };
      dispatch(addBook(newBook));
      navigate('/browse'); // Redirect to Browse Books page after adding the book
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <div>
          <label>Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={book.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
