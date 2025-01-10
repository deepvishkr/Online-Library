import React from 'react';
import '../App.css'

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];

const CategoryList = () => {
  return (
    <div className="category-list">
      <h3>Book Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
