import React, { useState } from 'react';

function BookReturning({ borrowedBooks, onReturnBook }) {
  const [selectedBorrowedBook, setSelectedBorrowedBook] = useState('');

  const handleReturnBook = () => {
    // Validation and submission logic
    if (!selectedBorrowedBook) {
        alert('Please select a borrowed book to return.');
        return;
      }
  
    onReturnBook(selectedBorrowedBook);
    setSelectedBorrowedBook('');
  };

  return (
    <div className="container">
      <h2>Return a Book</h2>
      <select value={selectedBorrowedBook} onChange={(e) => setSelectedBorrowedBook(e.target.value)}>
        <option value="">Select a Borrowed Book</option>
        {borrowedBooks.map((borrowedBook) => (
          <option key={borrowedBook.id} value={borrowedBook.id}>
            {borrowedBook.title} (StudentID: {borrowedBook.studentId})
          </option>
        ))}
      </select>
      <button onClick={handleReturnBook}>Return Book</button>
    </div>
  );
}

export default BookReturning;
