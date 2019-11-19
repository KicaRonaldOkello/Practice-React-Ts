import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GET_ARTICLES, ArticlesActionTypes, GET_SINGLE_ARTICLE } from "../../types/Articles";
import { articles } from "../../components/LandingPage/__mocks__/Article.mock";
import { getArticles, getSingleArticle } from "../ArticleActions"



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Article actions', () => {
    afterEach(() => {
        fetchMock.restore();
      });

    it('should return all articles', () => {
      fetchMock.getOnce(
        'https://ah-backend-athena-staging.herokuapp.com/api/articles', {
        body: articles,
        headers: {
          "content-type": "application/json"
      }})

      const expectedAction: ArticlesActionTypes[] = [{
        type: GET_ARTICLES,
        payload: articles
      }];

      const store = mockStore({});

      return store.dispatch(getArticles()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
    });

    it('should return a single article', () => {
      fetchMock.getOnce(
        `https://ah-backend-athena-staging.herokuapp.com/api/articles/slug`, {
          body: articles.articles.results[0],
          headers: {
            "content-type": "application/json"
        }
        })

        const expectedAction: ArticlesActionTypes[] = [{
          type: GET_SINGLE_ARTICLE,
          payload: articles.articles.results[0]
        }];

        const store = mockStore({});

        return store.dispatch(getSingleArticle('slug')).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        })

    })
});