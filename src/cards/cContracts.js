import React from 'react';
import data from '../data/contractData.json';
import './card.css';
import cardContract from './cContract.js';

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
                            <cardContract name={contract.name} icon={contract.icon} reward={contract.reward}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CardContracts;