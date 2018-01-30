import React from 'react';
import ReviewsContainer from '../parts/reviews/ReviewsContainer';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
  return (
    <section className="home">
      <div className="home__intro">
        <h1 className="home__title">
          paintcheap
        </h1>
        <p className="home__text">
          We put art in the hands of those who need it most.
        </p>
        <NavLink className="home__button" to='/paintings'>
          FIND A PAINTING
        </NavLink>
      </div>
      <ReviewsContainer />
    </section>
  );
}

export default Home;