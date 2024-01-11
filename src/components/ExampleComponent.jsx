import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/test-backend/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ExampleComponent;