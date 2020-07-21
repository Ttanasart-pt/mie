import React from 'react';
import './card.css';

class cardContract extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card-contract">
                <div className="contract-icon"><img src={require("../svg/" + this.props.icon)}/></div>
                <h3>{this.props.name}</h3>
                <div className="contract-reward"><h3>${this.props.reward}</h3></div>
            </div>
        );
    }
}

export default cardContract;