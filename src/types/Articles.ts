import { Articles, Article } from "../interfaces/Articles.interface";

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_SINGLE_ARTICLE = 'GET_SINLGE_ARTICLE';


export interface GetArticles {
    type: typeof GET_ARTICLES;
    payload: Articles;
}

export interface GetSingleArticle {
    type: typeof GET_SINGLE_ARTICLE;
    payload: Article
}


export type ArticlesActionTypes = GetArticles | GetSingleArticle;