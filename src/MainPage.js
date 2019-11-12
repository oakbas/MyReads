import React, {Component} from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from "react-router-dom"

class MainPage extends Component {
  state = {};
    render() {
        return (          
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <BookShelf
            booksOnShelf={this.props.books.filter(book => book.shelf === 'currentlyReading')}
            updateShelf={this.props.updateShelf}
            shelfTitle="Currently Reading"
            currentShelf='currentlyReading'
          />
          <BookShelf
            booksOnShelf={this.props.books.filter(book => book.shelf === 'wantToRead')}
            updateShelf={this.props.updateShelf}
            shelfTitle='Want to Read'
            currentShelf='wantToRead'
          />
          <BookShelf
            booksOnShelf={this.props.books.filter(book => book.shelf === 'read')}
            updateShelf={this.props.updateShelf}
            shelfTitle='Read'
            currentShelf='read'
          />
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
      );
    };
  }
  export default MainPage