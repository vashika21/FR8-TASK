import React, { useState } from 'react';

function BookLending({ students, books, onLendBook }) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  const handleLendBook = () => {
    // Validation and submission logic
    onLendBook(selectedStudent, selectedBook);
    setSelectedStudent('');
    setSelectedBook('');
  };

  return (
    <div className="container">
      <h2>Lend a Book</h2>
      <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
        <option value="">Select a Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
        <option value="">Select a Book</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      <button onClick={handleLendBook}>Lend Book</button>
    </div>
  );
}

export default BookLending;
