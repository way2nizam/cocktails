import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Error page</h1>
        <Link to='/'>Back To Home</Link>
      </div>
    </section>
  );
};

export default Error;
