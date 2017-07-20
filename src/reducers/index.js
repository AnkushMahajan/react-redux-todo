import { combineReducers } from 'redux';
import Posts from './reducer_posts';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    Posts: Posts,
    form: formReducer
});

export default rootReducer;
