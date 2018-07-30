import React from 'react';
import { Router, Route, hashHistory, Redirect,browserHistory } from 'react-router';
import ReactDOM  from 'react-dom';
import App from './components/App';
import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
    </Router>
), document.getElementById('content'));