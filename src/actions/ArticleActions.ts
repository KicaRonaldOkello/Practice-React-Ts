import { GET_ARTICLES, ArticlesActionTypes, GET_SINGLE_ARTICLE } from "../types/Articles";
import { Dispatch } from "redux";
import { Articles, Article } from "../interfaces/Articles.interface";


export const returnArticles = (articles: Articles):ArticlesActionTypes => {
    return {
        type: GET_ARTICLES,
        payload: articles
    }

}

export const returnSingleArticle = (article: Article):ArticlesActionTypes => {
    return {
        type: GET_SINGLE_ARTICLE,
        payload: article
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
                              
export const getSingleArticle = (slug: string) => async (dispatch: Dispatch<ArticlesActionTypes>) => {
    const response = await fetch(
       `https://ah-backend-athena-staging.herokuapp.com/api/articles/${slug}`, {
           method: 'GET',
           headers: {
               'content-type': 'application/json'
           }
       } 
    )

    const article: Article = await response.json();
    dispatch(
        returnSingleArticle(article)
    );
}