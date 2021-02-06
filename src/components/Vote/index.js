import React, { Component } from 'react';
import './index.scss';
import { AiFillStar } from "react-icons/ai";

class Vote extends Component {

    voteStar = () => {
        let imageIndex = []
        for (let i = 1; i <= this.props.vote; i++) { // loop array value vote
            imageIndex.push(i) // push vote to array
        }
        return (
            imageIndex.map((val, index) => // render icon star
                <AiFillStar className="icon" key={index} />
            )
        )
    }

    render() {
        return (
            <div className="row-icon">
                {this.voteStar()}
            </div>
        )
    }
}

export default Vote