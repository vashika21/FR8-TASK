import './App.css';


import React, { useState } from 'react';
import StudentRegistration from './components/StudentRegistration';
import BookRegistration from './components/BookRegistration';
import BookLending from './components/BookLending';
import BookReturning from './components/BookReturning';
import AvailableBooks from './components/AvailableBooks';
import TakenBooks from './components/TakenBooks';

function App() {
  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to register a student
  const registerStudent = (name) => {
    const newStudent = {
      id: students.length + 1,
      name: name,
    };
    setStudents([...students, newStudent]);
  };

  // Function to register a book
  const registerBook = (title, author) => {
    const newBook = {
      id: books.length + 1,
      title: title,
      author: author,
    };
    setBooks([...books, newBook]);
  };

  // Function to lend a book to a student
  const lendBook = (studentId, bookId) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, available: false };
      }
      return book;
    });

    const borrowedBook = {
      id: borrowedBooks.length + 1,
      studentId: studentId,
      bookId: bookId,
    };

    setBooks(updatedBooks);
    setBorrowedBooks([...borrowedBooks, borrowedBook]);
  };

  // Function to return a borrowed book
  const returnBook = (borrowedBookId) => {
    const updatedBooks = books.map((book) => {
      if (book.id === borrowedBooks.find((b) => b.id === borrowedBookId).bookId) {
        return { ...book, available: true };
      }
      return book;
    });

    const updatedBorrowedBooks = borrowedBooks.filter((borrowedBook) => borrowedBook.id !== borrowedBookId);

    setBooks(updatedBooks);
    setBorrowedBooks(updatedBorrowedBooks);
  };

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <StudentRegistration onRegisterStudent={registerStudent} />
      <BookRegistration onRegisterBook={registerBook} />
      <BookLending students={students} books={books} onLendBook={lendBook} />
      <BookReturning borrowedBooks={borrowedBooks} onReturnBook={returnBook} />
      <AvailableBooks books={books} />
      <TakenBooks borrowedBooks={borrowedBooks} />
    </div>
  );
}

export default App;
