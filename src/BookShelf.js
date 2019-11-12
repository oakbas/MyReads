import React, {Component} from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
  render() {
    // Books on the shelf
    let shelfBooks = this.props.booksOnShelf.map(book => {
      return (
      <li key={book.id}>
        <Book
        book = {book}
        updateShelf = {this.props.updateShelf}
        currentShelf = {this.props.currentShelf}
        />
      </li>
      );
    });
    return (          
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks}
          </ol>
        </div>
      </div>);
    };
  }

  export default BookShelf