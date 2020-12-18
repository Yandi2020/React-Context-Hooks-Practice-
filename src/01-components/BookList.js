import React, { useContext } from 'react';
import { BookContext } from '../02-contexts/BookContext';
//import { BookContext } from '../02-contexts/BookContextWithReducer';

import BookDetails from './BookDetails'
//import BookDetails from './BookDetailsWithReducer'

const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return(
                        <BookDetails key={book.id} book={book} />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read now</div>
    )
}
 
export default BookList;