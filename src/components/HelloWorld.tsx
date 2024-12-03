import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const [requestString, setRequestString] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
        setRequestString(response.data.request)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    <p>{message}</p>
      <p>{requestString}XX</p>
    </div>
  );
}

export default HelloWorld;
