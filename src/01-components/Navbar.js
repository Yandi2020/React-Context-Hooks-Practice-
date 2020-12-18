import React, { useContext } from 'react';
import { BookContext } from '../02-contexts/BookContext';
//import { BookContext } from '../02-contexts/BookContextWithReducer';

const Navbar = () => {
    const { books } = useContext(BookContext);
    
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <div>Now you have {books.length} books to read</div>
        </div>
    );
}

export default Navbar;