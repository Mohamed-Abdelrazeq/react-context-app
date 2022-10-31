import { v4 as uuidv4 } from 'uuid';
import { BooksReducerActions } from '../enums/BooksActions';

export const booksReducer = (state, action) => {
    switch (action.type) {
        case BooksReducerActions.ADD:
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidv4()
            }
            ]
        case BooksReducerActions.REMOVE:
            return state.filter(book => book.id !== action.id);
        default :
            return state;
    }
}


