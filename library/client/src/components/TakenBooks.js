 import React from 'react';

 function TakenBooks({ borrowedBooks }) {
   return (
     <div className="container">
       <h2>Books Taken by Students</h2>
       <ul className='taken-book-status'>
         {borrowedBooks.map((borrowedBook) => (
           <li key={borrowedBook.id}>
             {borrowedBook.title} (Student ID: {borrowedBook.studentId})
           </li>
         ))}
       </ul>
     </div>
   );
 }

 export default TakenBooks;






// import React from 'react';

// function TakenBooks({ borrowedBooks }) {
//   return (
//     <div className="container">
//       <h2>Books Taken by Students</h2>
//       <ul>
//         {borrowedBooks.map((borrowedBook) => (
//           <li key={borrowedBook.id} className={borrowedBook.title ? 'taken-book-status' : 'book-status'}>
//             {borrowedBook.title ? (
//               `${borrowedBook.title} (Student ID: ${borrowedBook.studentId})`
//             ) : (
//               'Book information missing'
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TakenBooks;
