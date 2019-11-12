import React, {Component} from 'react'
import './App.css'

class Book extends Component {
    state = {};

    render() {
      // check image link
      let isThumbnailExist = typeof this.props.book.imageLinks !== "undefined" ? true : false;
        return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: isThumbnailExist
          ? `url(${this.props.book.imageLinks.thumbnail})`
          : null}}>
          </div>
          <div className="book-shelf-changer">
            <select onChange = {(event) => this.props.updateShelf( this.props.book, event.target.value)}
              value={this.props.currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
      );
    };
  }

  export default Book