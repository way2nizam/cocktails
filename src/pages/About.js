import React from 'react';

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>About Us</h1>
      <p>
        This is Reactjs web app used to search your favorite cocktail drinks.
        Using <strong>React Router</strong> for page navigation.
      </p>
      <h3>I have used multiple things like :</h3>
      <ol>
        <li>React & ReactDOM</li>
        <li>useState, useEffect, useContext</li>
        <li>BrowserRouter as Router, Route, Switch, Link</li>
        <li>AppProvider, UseGlobalContext, AppContext</li>
        <li>useParams</li>
        <li>useCallback</li>
        <li>async, wait</li>
        <li>useRef, map</li>
      </ol>

      <p>API-1: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=</p>
      <p>API-2: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='</p>
      <a
        target='_blank'
        href='https://www.thecocktaildb.com/api.php'
        rel='noreferrer'>
        API Source : Click Here
      </a>
    </section>
  );
};

export default About;
