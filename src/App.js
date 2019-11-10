import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(result => {
      this.setState({
        books: result
      });
    });
  };
    render() {
        return (
        <div className="App">
          <Route
          exact
          path="/"
          render={() => (
            <MainPage
              books={this.state.books}
            />
          )}
        />
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
          />
        )}/>
        </div>
        );
    };
}

export default BooksApp