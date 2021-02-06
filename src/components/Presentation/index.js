import React, { Component } from 'react';
import './index.scss';
import List from '../../list.json'
import Vote from '../Vote'
import moment from 'moment';

class Presentation extends React.Component {

    ListCard = () => { // Detailed list
        return (
            List.map((val, index) =>
                <div className="box" key={index}>
                    <img className="presentation-img" src={val.image_url} alt="image card" />
                    <p className="presentation-title">{val.title}</p>
                    <p className="presentation-time" >{moment(val.created_at).fromNow()}</p>
                    <Vote vote={val.vote} />
                    <p className="presentation-price" >฿ {val.price.toFixed(2)}</p>
                </div>
            )
        )
    }

    render() {
        return (
            <div className="container">
                {this.ListCard()}
            </div>
        )
    }
}

export default Presentation;


