import React from 'react';
import oreData from '../data/oreData.json';
import './card.css';
import PlayerData from '../data/playerData';

class CardContract extends React.Component{
    constructor(props){
        super(props);
    }
    onContractClick = () => {
        PlayerData.contractComplete(this.props.name);
    }
    
    render(){
        const cardOre = {
            "background-color": "#2d2d2d",
            "margin": "0px 0px 5px 0px",
            "height": "30px"
        };
        return(
            <div className={"card-contract ch" + this.props.ore.length}>
                <div className="contract-icon"><img src={require("../svg/" + this.props.icon)}/></div>
                <h3>{this.props.name}</h3>
                <div className="contract-reward" onClick={this.onContractClick}><h3>${this.props.reward}</h3></div>

                <div className="contract-ore">
                    {
                        this.props.ore.map((_ore) => 
                        <div className={"card-ore-data"} style={cardOre}>
                            <p>{_ore.oreType}</p>
                            <p style={{"color":oreData[_ore.oreType].color, "background-color":"#242424"}}>{_ore.yield}</p>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

export default CardContract;