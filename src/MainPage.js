import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import BookShelf from './BookShelf';


class MainPage extends Component {
  state = {};
    render() {
      const shelveKeys = ["currentlyReading", "wantToRead", "read"]
      const shelveNames = ["Currently Reading", "Want To Read", "Read"]
        return (          
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {shelveKeys.map((shelf, index) => {
          const shelfTitle = shelveNames[index];
          return(                
          <BookShelf
            key={shelf}
            books={this.props.books}
            shelfTitle={shelfTitle}
        />)
      })}
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
        );
    };
}

export default MainPage