import { Articles } from "../interfaces/Articles.interface";

export const GET_ARTICLES = 'GET_ARTICLES';


export interface GetArticles {
    type: typeof GET_ARTICLES;
    payload: Articles;
}



export type ArticlesActionTypes = GetArticles;