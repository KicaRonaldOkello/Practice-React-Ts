import { combineReducers } from 'redux';
import { articleReducer } from './ArticleReducers';


export const rootReducer = combineReducers({
    articles: articleReducer,
});

export type AppState = ReturnType<typeof rootReducer>