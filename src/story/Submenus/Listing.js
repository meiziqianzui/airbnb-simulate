import React, { Component } from 'react';
import StoryCard from './StoryCard';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <StoryCard/>
            </div>
        );
    }
}

export default Listing;