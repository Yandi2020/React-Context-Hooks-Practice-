import React from 'react';
import BookList from './01-components/BookList';
import Navbar from './01-components/Navbar';

import BookContextProvider from './02-contexts/BookContext';
//import BookContextProvider from './02-contexts/BookContextWithReducer';

import BookForm from './01-components/BookForm'
//import BookForm from './01-components/BookFormWithReducer'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
