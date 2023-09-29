import React, { useState } from 'react';

function StudentRegistration({ onRegisterStudent }) {
  const [name, setName] = useState('');

  const handleRegisterStudent = () => {
    // Validation and submission logic
    onRegisterStudent(name);
    setName('');
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleRegisterStudent}>Register Student</button>
    </div>
  );
}

export default StudentRegistration;
