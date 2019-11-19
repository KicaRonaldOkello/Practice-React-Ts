import { singleArticleReducer } from "../SingleArticleReducer";
import { GET_SINGLE_ARTICLE } from "../../types/Articles";
import { articles } from "../../components/LandingPage/__mocks__/Article.mock";


describe('Test Single Article Reducer', () => {
    it('should return a single article', () => {
        expect(singleArticleReducer(undefined, {
            type: GET_SINGLE_ARTICLE,
            payload: articles.articles.results[0]
        })).toEqual(articles.articles.results[0])
    })
});