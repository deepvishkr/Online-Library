import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'

// Dummy data for books (you can replace this with actual API data or props)
const booksData = [
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
];

const BookDetails = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const book = booksData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <p>Book not found!</p>;  // Display a message if the book is not found
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      
      {/* "Back to Browse" button */}
      <Link to="/browse">
        <button className="back-to-browse-btn">Back to Browse</button>
      </Link>
    </div>
  );
};

export default BookDetails;

