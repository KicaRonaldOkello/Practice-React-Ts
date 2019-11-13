import * as React from 'react';
import { shallow }  from 'enzyme';
import { Article } from '../../../interfaces/Articles.interface';
import configureStore from 'redux-mock-store';
import { articles } from '../../LandingPage/__mocks__/Article.mock';
import { SingleArticle } from '../SingleArticle';


let props = {
    article: {} as Article,
    getSingleArticle: jest.fn(),
    slug: '',
}

describe('Landing Page', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        wrapper = shallow(<SingleArticle {...props}/>);
        const mockStore = configureStore();
        store = mockStore();
    });
    
    it('should test if component renders', () => {
        expect(wrapper.exists()).toEqual(true);
        expect(props.getSingleArticle).toHaveBeenCalledTimes(1);
    });
    
    it('should change state when component updates', () => {
        const article = articles.articles.results[0];
        wrapper.setProps({ article });

        expect(wrapper.instance().state).toEqual({ article });
    });
})