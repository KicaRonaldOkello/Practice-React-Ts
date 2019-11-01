import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Navbar } from './components/Navbar/Navbar';

const Routes = () => (
    <Router>
        <Provider store={store}>
            <Navbar />
            <Switch>

            </Switch>
        </Provider>
    </Router>
);

export default Routes;