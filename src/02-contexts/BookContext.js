import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The book No. 1', author: 'Person', id: 1},
        {title: 'The book No. 2', author: 'Person', id: 2},
        {title: 'The book No. 3', author: 'Person', id: 3},
        {title: 'The book No. 4', author: 'Person', id: 4},
    ]);

    const addBook = (title, author) => {
        setBooks([
            ...books,
            {title, author, id: uuidv4()}
        ]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return(
        <BookContext.Provider value={ {books, addBook, removeBook}  }>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;