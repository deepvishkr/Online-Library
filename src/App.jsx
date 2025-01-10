import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BookList />} />
          <Route path="/books/:category" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />  
          <Route path="/add" element={<AddBook/>}  />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
