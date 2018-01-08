import { BeatLoader } from 'react-spinners';
import React, { Component } from 'react';
import { tada } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  tada: {
    animation: 'x .5s',
    animationName: Radium.keyframes(tada, 'tada')
  }
};

export default class Loading extends Component {
  render() {
    return (
      <StyleRoot style={styles.zoomIn}>
        <div className='container'>
          <section
            className='container has-text-centered'
            style={{
              paddingTop: `${4}rem`
            }}>
            <div
              className='column is-8 is-offset-2 title-font'
              style={{
                marginBottom: `${10}rem`
              }}>
              <br />
              <div className='columns is-centered'>
                <BeatLoader
                  className='column is-2 has-text-centered '
                  color={'#b96918'}
                  loading={true}
                />
              </div>
              <br />
            </div>
          </section>
        </div>
      </StyleRoot>
    );
  }
}
