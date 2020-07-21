import React from 'react';
import data from '../data/contractData.json';
import './card.css';
import CardContract from './cContract.js';

class CardContracts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Contracts",
        }
    }

    render(){
        return(
            <div className="card gr2">
                <h2 className="card-title">{this.state.header}</h2>
                <div className="card-content-list">
                    {
                        data.contracts.map((contract) => 
                            <CardContract name={contract.name} icon={contract.icon} reward={contract.reward} ore={contract.ore}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CardContracts;