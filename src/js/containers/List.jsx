import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetailsByIDs } from '../actions/ListActions';
import uuid from 'uuid';
import backupImage from '../../../public/backupImage.png';
import Welcome from '../components/Welcome';
import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounceInUp: {
    animation: 'x .5s',
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
  }
};

class List extends Component {
  shouldComponentUpdate = () => {
    if (this.props.list.movie === []) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const movieCards = this.props.list.movies.map(movie => (
      <StyleRoot key={uuid()} style={styles.bounceInUp}>
        <article className='media box poster-image'>
          <figure className='media-left'>
            <p className='image is-hidden-mobile'>
              {movie.Poster === 'N/A' ? (
                <img src={backupImage} className='margin-auto' />
              ) : (
                <img src={movie.Poster} className='margin-auto' />
              )}
            </p>
          </figure>
          <div className='media-content'>
            <div className='content'>
              <p className='is-marginless'>
                <strong
                  className='is-size-5 title-font'
                  style={{ marginRight: 0.5 + 'rem' }}>
                  {movie.Title}
                </strong>
                <span className='tag is-small is-light has-text-weight-bold block is-hidden-mobile'>
                  {movie.Year}
                </span>
              </p>
              <hr
                style={{ marginTop: 0.5 + 'rem', marginBottom: 0.5 + 'rem' }}
              />
              <span
                className='tag is-small is-light has-text-weight-bold is-inline-block is-hidden-tablet'
                style={{ marginBottom: 10 + 'px' }}>
                {movie.Year}
              </span>
              <p className='text-body-font is-size-6-tablet'>
                {movie.Plot === 'N/A' ? (
                  "Unfortunately the database doesn't have any plot info."
                ) : (
                  movie.Plot
                )}
              </p>
            </div>
            <Link to={`/movie/${movie.imdbID}`}>
              <div className='button is-pulled-right is-outlined is-dark has-text-weight-bold text-body-font more-info-button'>
                More Information
              </div>
            </Link>
          </div>
        </article>
      </StyleRoot>
    ));

    return <div className='container'>{movieCards}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetailsByIDs }, dispatch);
}

function mapStateToProps({ list }) {
  return { list };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
