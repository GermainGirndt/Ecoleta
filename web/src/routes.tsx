import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// For redirecting to other pages
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import App from './App';

const Routes = () => {
    return (
        <BrowserRouter>
            {/* path="/" for localhost:3000/*/}
            <Route component={Home} path="/"exact />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>


    );


}

export default Routes;