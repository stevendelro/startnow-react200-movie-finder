import React from 'react';
import { Link } from 'react-router-dom';
import { wobble } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
};

const NotFoundPage = () => (
  <StyleRoot style={styles.wobble}>
    <section
      className='container has-text-centered'
      style={{
        paddingTop: `${4}rem`
      }}>
      <div
        className='column is-8 is-offset-2 not-found-font box'
        style={{
          marginBottom: `${10}rem`
        }}>
        <br />
        <h2 className='title'>ERROR: 404</h2>
        <h1>Page not found</h1>
        <br />
      </div>
      <p className='subtitle'>You can't do anything right.</p>
      <Link to='/'>
        <div className='button is-danger is-outlined '>
          <span>Go Home</span>
        </div>
      </Link>
    </section>
  </StyleRoot>
);

export default NotFoundPage;
