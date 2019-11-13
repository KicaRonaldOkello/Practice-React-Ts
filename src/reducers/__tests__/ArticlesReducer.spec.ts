import { articleReducer } from "../ArticlesReducers";
import { GET_ARTICLES } from "../../types/Articles";
import { articles } from "../../components/LandingPage/__mocks__/Article.mock";

describe('Test Articles Reducer', () => {

    it('should return articles', () => {
        expect(articleReducer(undefined, {
            type: GET_ARTICLES,
            payload: articles
        })).toEqual(articles);
    })
});