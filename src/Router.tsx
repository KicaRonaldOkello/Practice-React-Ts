import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Navbar } from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import SingleArticle from './components/SingleArticle/SingleArticle';

const Routes = () => (
    <Router>
        <Provider store={store}>
            <Navbar />
            <Switch>
                <Route path="/article/:slug" component={SingleArticle} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Provider>
    </Router>
);

export default Routes;