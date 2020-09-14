import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// set to our axios instance from our file
// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// only want to load this if they choose a new post
// otherwise it is being loaded for no reason, that's not efficient
// import NewPost from './NewPost/NewPost';

// here we can dynamically load NewPost only if we need to, with lazy loading
// only load it if the user clicks on it
// need to pass a function to it, use an anonymous function here
const AsyncNewPost = asyncComponent(() => {
    // dynamic import - whatever is between the () is only imported
    // when that function is executed
    // function here will only execute when AsyncNewPost is rendered
    // only executed when the const AsyncNewPost is executed somewhere
    return import('./NewPost/NewPost'); 
});

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> 
                only load NewPost if it is selected
                */}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> 
                        this works for redirection but the Redirect 
                        is a different solution*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;