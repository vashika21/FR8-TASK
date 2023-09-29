import React from 'react';


function AvailableBooks({ books }) {
  return (
    <div className="container" >
      <h2>Available Books</h2>
      <ul className='book-status'>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableBooks;
