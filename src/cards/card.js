import React from 'react';
import './card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Card",
        }
    }
    
    render(){
        return(
            <div className="card gc2">
                <h2 className="card-title">{this.state.header}</h2>
            </div>
        );
    }
}

export default Card;