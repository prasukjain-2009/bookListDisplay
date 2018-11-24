import { combineReducers } from 'redux';
import BooksReducers from "./reducers_books"
import activeBookReducer from './reducer_active_book'


const rootReducer = combineReducers({
  books:BooksReducers,
  activeBook:activeBookReducer
});

export default rootReducer;
