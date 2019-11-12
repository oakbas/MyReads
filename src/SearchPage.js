import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"


class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchedBooks: []
    }

    // Update search query
    updateQuery = (query) => {
        this.setState({
          query: query
    
        })
        this.updateSearchedBooks(query);
    }

    // Update search books with query entered
    updateSearchedBooks = (query) => {
        if(query){
          BooksAPI.search(query).then((searchedBooks) => {
            if (searchedBooks.error){
              this.setState({searchedBooks: []});
            } else {
              this.setState({searchedBooks: searchedBooks});
            }
          })
        } else {
          this.setState({ searchedBooks: []});
        }
    }

    render() {
      let searchBookList = this.state.searchedBooks.map(searchedBook => {
        let shelf ="none";
        this.props.books.map(book => (
            book.id === searchedBook.id ?
            shelf = book.shelf :''));
        return (
        <li key ={searchedBook.id} >
        <Book
            book ={searchedBook}
            updateShelf = {this.props.updateShelf}
            currentShelf = {shelf}
        />
        </li>
        );
        })

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">
            Close
          </Link>              
          <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) =>
                    this.updateQuery(e.target.value)
                }/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {searchBookList
                }   
                </ol>
            </div>
          </div>
        );
    };
}

export default SearchPage