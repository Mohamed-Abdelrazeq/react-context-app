import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { BooksReducerActions } from '../enums/BooksActions';


export default function BookDetails({book}) {
    const {dispatch} = useContext(BookContext);
    return (
        <li onClick={() => dispatch({type: BooksReducerActions.REMOVE , id: book.id})}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}
