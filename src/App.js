import React from 'react';
import './App.less';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';
import Routes from './routes';

const routes = Routes.routes;
const RouteWithSubRoutes = (route) => {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}/>
    );
};

function App() {
    return (
        <Router>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Router>
    );
}

export default App;
