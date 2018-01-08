import React from 'react';
import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounceInUp: {
    animation: 'x .5s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  }
};

const Welcome = () => (
  <StyleRoot style={styles.bounceInUp}>
    <div className='container'>
      <section
        className='container has-text-centered'
        style={{
          paddingTop: `${4}rem`
        }}>
        <div
          className='column is-8 is-offset-2 title-font box'
          style={{
            marginBottom: `${10}rem`
          }}>
          <br />
          <h2 className='title'>Welcome</h2>
          <br />
        </div>
      </section>
    </div>
  </StyleRoot>
);

export default Welcome;
