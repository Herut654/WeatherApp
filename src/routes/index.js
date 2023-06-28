import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Favorites from '../components/Favorites/Favorites';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch >
                    <Route path='/home' component={Home} exact />
                    <Route path='/favorites' component={Favorites} exact />
                    <Redirect from="/" to="/home" exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes