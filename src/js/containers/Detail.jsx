import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backupImage from '../../../public/backupImage.png';
import { fetchDetailByID } from '../actions/DetailActions';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  zoomIn: {
    animation: 'x .6s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
};

class MovieDetail extends Component {
  componentWillMount = () => {
    this.props.fetchDetailByID(this.props.match.params.id);
  };

  render() {
    const { detail } = this.props;
    console.log('detail.poster', detail.poster);
    return (
      <StyleRoot style={styles.zoomIn}>
        <div
          className='container'
          style={{
            paddingTop: `${3}rem`,
            paddingLeft: `${3}rem`,
            paddingRight: `${3}rem`
          }}>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              <div className='tile is-child '>
                <figure className='image'>
                  {detail.poster === 'N/A' ? (
                    <img
                      src={backupImage}
                      style={{
                        margin: 'auto'
                      }}
                    />
                  ) : (
                    <img
                      src={detail.poster}
                      style={{
                        margin: 'auto'
                      }}
                    />
                  )}
                </figure>
              </div>
            </div>
            <div className='tile is-vertical is-parent'>
              <div className='tile is-child'>
                <article className='message is-dark'>
                  <div className='message-header title-font'>
                    <strong className='is-size-4'>{detail.title}</strong>
                  </div>
                  <div className='message-body is-justified text-body-font'>
                    <h1
                      className='title is-5'
                      style={{
                        marginBottom: `${1}rem`
                      }}>
                      Synopsis
                    </h1>
                    <p>
                      {detail.plot === '' ? 'Plot unavailable' : detail.plot}
                    </p>
                  </div>
                </article>

                <div className='tile is-child'>
                  <article className='message is-dark'>
                    <div className='message-header title-fonnt'>
                      <strong className='is-size-4 has-text-centered'>
                        Details
                      </strong>
                    </div>
                    <div
                      className='message-body is-paddingless'
                      style={{
                        border: 0
                      }}>
                      <table className='table is-fullwidth text-body-font'>
                        <tbody>
                          <tr>
                            <td width='5%'>
                              <i className='fas fa-calendar-alt' />
                            </td>
                            <td>Released</td>
                            <td>{detail.yearReleased}</td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-stopwatch' />
                            </td>
                            <td>Runtime</td>
                            <td>{detail.runtime}</td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-chart-pie' />
                            </td>
                            <td>Genres</td>
                            <td>{detail.genre}</td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-money-bill-alt' />
                            </td>
                            <td>Box Office</td>
                            <td>{detail.boxOffice}</td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='far fa-star' />
                            </td>
                            <td>Metascore</td>
                            <td>
                              <p>{detail.metascore} / 100</p>
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-star' />
                            </td>
                            <td>IMDB</td>
                            <td>
                              <p>{detail.IMDBrating} / 10</p>
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-info-circle' />
                            </td>
                            <td>More Info</td>
                            <td>
                              {' '}
                              {
                                <a href={detail.website}>{detail.website}</a>
                              }{' '}
                            </td>
                          </tr>

                          <tr />
                        </tbody>
                      </table>
                    </div>
                  </article>
                </div>
                <Link to='/'>
                  <div
                    className='button is-pulled-right is-outlined is-dark inline-block has-text-weight-bold text-body-font'
                    style={{
                      marginTop: `${1}rem`,
                      width: `${100}%`
                    }}>
                    Return Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetailByID }, dispatch);
}

function mapStateToProps({ detail }) {
  return { detail };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
