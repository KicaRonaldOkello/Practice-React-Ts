import * as React from 'react';
import { shallow }  from 'enzyme';
import { Articles } from '../../../interfaces/Articles.interface';
import { LandingPage } from '../LandingPage';
import configureStore from 'redux-mock-store';
import { articles } from '../__mocks__/Article.mock';


let props = {
    articles: {} as Articles,
    getArticles: jest.fn()
}




describe('Landing Page', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        wrapper = shallow(<LandingPage {...props}/>);
        const mockStore = configureStore();
        store = mockStore();
    });

    it('should test if component renders', () => {
        expect(wrapper.exists()).toEqual(true);
        expect(props.getArticles).toHaveBeenCalledTimes(1);
    });

    it('should change state when component updates', () => {
        wrapper.setProps({ articles });

        expect(wrapper.instance().state).toEqual({ articles });
    });
})