import { GET_ARTICLES, ArticlesActionTypes } from "../types/Articles";
import { Dispatch } from "redux";
import { Articles } from "../interfaces/Articles.interface";


export const returnArticles = (articles: Articles):ArticlesActionTypes => {
    return {
        type: GET_ARTICLES,
        payload: articles
    }

}
export const getArticles = () => async (dispatch: Dispatch<ArticlesActionTypes>) => {
        const response = await fetch(
            'https://ah-backend-athena-staging.herokuapp.com/api/articles', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
            }
        );

        const articles: Articles = await response.json();
            dispatch(
                returnArticles(articles)
            );
    }
                              
