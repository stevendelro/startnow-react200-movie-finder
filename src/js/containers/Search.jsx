import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import List from './List';
import Welcome from '../components/Welcome';
import Loading from '../components/Loading';
import { fetchData, newSearchTerm } from '../actions/ListActions';

class Search extends Component {
  updateSearchText = e => {
    this.props.newSearchTerm(e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchData(this.props.list.searchInput);
  };

  render() {
    const { searchInput } = this.props.list;
    return (
      <div>
        <section className='hero is-large is-dark main-header-image'>
          <div
            className='hero-body'
            style={{
              paddingTop: 50,
              paddingBottom: 25
            }}>
            <div className='container'>
              <Link to='/'>
                <h1
                  className='title has-text-centered brand-font is-size-1 text-shadow'
                  style={{
                    marginBottom: 4 + 'rem'
                  }}>
                  movie finder
                </h1>
              </Link>
              <div>
                <form onSubmit={this.onFormSubmit}>
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      type='text'
                      className='input is-large is-rounded fade'
                      value={searchInput}
                      onChange={this.updateSearchText}
                    />
                    <span className='icon is-medium is-left'>
                      <i className='fas fa-film' />
                    </span>
                    <span className='icon is-medium is-right'>
                      <i className='fas fa-search' />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {this.props.list.empty ? (
          <Welcome />
        ) : this.props.list.pending ? (
          <Loading />
        ) : (
          <List />
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, newSearchTerm }, dispatch);
}

function mapStateToProps({ list }) {
  return { list };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
