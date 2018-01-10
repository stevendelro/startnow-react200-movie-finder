import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backupImage from '../../../public/backupImage.png';
import { fetchDetailByID, clearDetails } from '../actions/DetailActions';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  zoomIn: {
    animation: 'x .4s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
};

class MovieDetail extends Component {
  componentDidMount = () => {
    this.props.fetchDetailByID(this.props.match.params.id);
  };

  render() {
    const { detail } = this.props;

    const clearState = () => {
      this.props.clearDetails();
    }

    return (
      <StyleRoot style={styles.zoomIn}>
        <div className='container detail-container-padding' style={{marginBottom: 4 + 'rem'}}>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              <div className='tile is-child '>
                <figure className='image'>
                  {detail.poster === 'N/A' ? (
                    <img src={backupImage} className='margin-auto' />
                  ) : (
                    <img src={detail.poster} className='margin-auto' />
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
                      {detail.plot === 'N/A' ? (
                        "Yep, the database definitely doesn't have any plot info. Sorry about that."
                      ) : (
                        detail.plot
                      )}
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
                            <td>
                              {detail.yearReleased === 'N/A' ? (
                                'Unknown'
                              ) : (
                                detail.yearReleased
                              )}
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-stopwatch' />
                            </td>
                            <td>Runtime</td>
                            <td>
                              {detail.runtime === 'N/A' ? (
                                'Unknown'
                              ) : (
                                detail.runtime
                              )}
                            </td>
                          </tr>

                          <tr className='no-overflow'>
                            <td width='5%'>
                              <i className='fas fa-chart-pie' />
                            </td>
                            <td>Genres</td>
                            <td>
                              {detail.genre === 'N/A' ? (
                                'Unavailable'
                              ) : (
                                detail.genre
                              )}
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-money-bill-alt' />
                            </td>
                            <td>Box Office</td>
                            <td>
                              {detail.boxOffice === 'N/A' ? (
                                'Unknown'
                              ) : (
                                detail.boxOffice
                              )}
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='far fa-star' />
                            </td>
                            <td>Metascore</td>
                            <td>
                              <p>
                                {detail.metascore === 'N/A' ? (
                                  'Not Rated'
                                ) : (
                                  `${detail.metascore} / 100`
                                )}
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td width='5%'>
                              <i className='fas fa-star' />
                            </td>
                            <td>IMDB</td>
                            <td>
                              <p>
                                {detail.IMDBrating === 'N/A' ? (
                                  'Not Rated'
                                ) : (
                                  `${detail.IMDBrating} / 10`
                                )}
                              </p>
                            </td>
                          </tr>

                          <tr className='is-hidden-mobile'>
                            <td width='5%'>
                              <i className='fas fa-info-circle' />
                            </td>
                            <td>More Info</td>
                            <td>
                              {' '}
                              {detail.website === 'N/A' ? (
                                'Website Unavailable'
                              ) : (
                                <a href={detail.website}>{detail.website}</a>
                              )}{' '}
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
                    onClick={clearState}
                    className='return-home-button button is-pulled-right is-outlined is-dark inline-block has-text-weight-bold text-body-font'>
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
  return bindActionCreators({ fetchDetailByID, clearDetails }, dispatch);
}

function mapStateToProps({ detail }) {
  return { detail };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
