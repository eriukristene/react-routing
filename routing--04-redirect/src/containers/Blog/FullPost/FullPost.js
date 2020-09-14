import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    // first time the posts gets loaded
    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    // the second time
    // handle changes here
    // if the Post component or the component in general 
    // is already loaded through routing
    // because the router will not unmount the old one
    // and mount the same one again with different data;
    // it will reuse the old one and just adjust the route parameter
    // it's our job to react to this new parameter
    // and we can react to this in componentDidUpdate()
    // this will be called because the props changed
    // received a new match object, with a new params object, with a new id
    componentDidUpdate() {
        this.loadData();
    }

    // holds the code that reaches out to the web and grabs the data
    loadData () {
        if ( this.props.match.params.id ) {
            // converting the last id to a number with the +
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;