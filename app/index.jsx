//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';



const App = React.createClass({
    render(){
        return (
            <div>app</div>
        )
    }
})

const About = React.createClass({
    render(){
        return (
            <div>about</div>
        )
    }
})

const NoMatch = React.createClass({
    render(){
        return (
            <div>no macth</div>
        )

    }
})

const app = document.createElement('div');
document.body.appendChild(app);


ReactDOM.render((
    <Router>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/*" component={NoMatch}/>
    </Router>
), app)