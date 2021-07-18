import React, { Component } from 'react';

class BookList extends Component {
    render () {
        return (
            <div className="book-list">
                <ul>
                    <li>The Atlantis Gene</li>
                    <li> The Return of the King</li>
                    <li>How to Cook with Just a Spoon</li>
                </ul>
            </div>
        );
    }
}

export default BookList;

