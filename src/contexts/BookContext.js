import React , { createContext , useReducer } from 'react';
import { booksReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,dispatch] = useReducer(booksReducer ,[]);
    return (
        <BookContext.Provider value={{books,dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;