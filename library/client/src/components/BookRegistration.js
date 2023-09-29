import React, { useState } from 'react';

function BookRegistration({ onRegisterBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleRegisterBook = () => {
    // Validation and submission logic
    onRegisterBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container">
      <h2>Book Registration</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={handleRegisterBook}>Register Book</button>
    </div>
  );
}

export default BookRegistration;
