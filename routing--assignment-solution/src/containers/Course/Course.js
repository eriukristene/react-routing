import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    // this will parse the title, need to do this with query params
    componentDidMount () {
        this.parseQueryParams();
    }

    // need to run this too in case they click on another course
    // otherwise, if we just have componentDidMount, it wouldn't update the title
    // because the component is never unmounted and thus it wouldn't run the code
    // to update the title
    // so we need to run the code to update the title here as well because
    // we want the title to update when they click on a new course
    componentDidUpdate() {
        this.parseQueryParams();
    }

    // ths is the code to parse through to get the title
    parseQueryParams () {
        console.log(this.props);
        // URLSearchParams creates an iterator
        // something we can search through
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            // get the course title from the query params array called query
            // check to see if we have a new course title
            // only set the state again if we have a new course title
            // have to check or otherwise we will have an infinite loop
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;