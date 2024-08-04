import React, { useState } from 'react';

const Greeting = () => {
  const [firstName, setFirstName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${firstName}! Welcome to our app.`);
  };

  return (
    <div className="container">
      <h1>Greeting App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter your first name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <button type="submit">Greet Me</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;