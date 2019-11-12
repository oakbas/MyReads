import React, {Component} from 'react'
import './App.css'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  };

  // Get Data
  componentDidMount() {
    this.updateBooks();
  };

  //Update shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateBooks()
    })
  }
  
 //Update books in state
  updateBooks = () => {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    });    
  }
    render() {
        return (
        <div className="App">
          <Route
          exact
          path="/"
          render={() => (
          <MainPage
              books={this.state.books}
              updateShelf = {this.updateShelf}
            />
          )}
          />
          <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            updateShelf = {this.updateShelf}
          />
          )}
          />
        </div>
        );
    };
}

export default BooksApp