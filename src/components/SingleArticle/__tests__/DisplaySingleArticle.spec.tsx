import * as React from 'react';
import { articles } from '../../LandingPage/__mocks__/Article.mock';
import { shallow } from 'enzyme';
import DisplaySingleArticle from '../DisplaySingleArticle';

let props = {
    article: articles.articles.results[0]
};

describe('DisplayArticles Component', () => {
    it('should display an article', () => {
        const wrapper = shallow(<DisplaySingleArticle {...props} />);

        expect(wrapper.exists()).toEqual(true);
    })
});