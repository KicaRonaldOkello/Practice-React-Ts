import { combineReducers } from 'redux';
import { articleReducer } from './ArticlesReducers';
import { singleArticleReducer } from './SingleArticleReducer';


export const rootReducer = combineReducers({
    articles: articleReducer,
    article: singleArticleReducer,
});

export type AppState = ReturnType<typeof rootReducer>