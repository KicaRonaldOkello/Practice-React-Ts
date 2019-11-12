import { Articles } from "../interfaces/Articles.interface";
import { ArticlesActionTypes, GET_ARTICLES } from "../types/Articles";


const initialState = {} as Articles;

export const articleReducer = (
    state = initialState,
    action: ArticlesActionTypes

):Articles => {
    switch (action.type) {
        case GET_ARTICLES:

            return {
                ...state,
                ...action.payload
            };
    
        default:
            return state;
    }
}