import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Header />
            <div>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
            </div>
        <Footer />
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
