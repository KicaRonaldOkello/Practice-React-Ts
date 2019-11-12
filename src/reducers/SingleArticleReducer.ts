import { Article } from "../interfaces/Articles.interface";
import { ArticlesActionTypes, GET_SINGLE_ARTICLE } from "../types/Articles";




const initialState = {} as Article;

export const singleArticleReducer = (
    state = initialState,
    action: ArticlesActionTypes

):Article => {
    switch (action.type) {
        case GET_SINGLE_ARTICLE:

            return {
                ...state,
                ...action.payload
            };
    
        default:
            return state;
    }
}