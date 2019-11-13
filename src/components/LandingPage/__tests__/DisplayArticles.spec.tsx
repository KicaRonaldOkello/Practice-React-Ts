import * as React from 'react';
import { articles } from '../__mocks__/Article.mock';
import { shallow } from 'enzyme';
import DisplayArticles from '../DisplayArticles';

let props = {
    articles
};

describe('DisplayArticles Component', () => {
    it('should display an article', () => {
        const wrapper = shallow(<DisplayArticles {...props} />);

        expect(wrapper.exists()).toEqual(true);
    })
});