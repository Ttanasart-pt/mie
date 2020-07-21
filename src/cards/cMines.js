import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import data from '../data/playerData.json';
import './card.css';

import icon_stop from '../svg/stop.svg';
import icon_play from '../svg/play.svg';
import icon_cont from '../svg/contracts.svg';
import icon_cart from '../svg/minecart.svg';

class CardMines extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Mines",
        }

        setInterval(() => {
            this.setState(() => ({}));
        }, 1000);
    }
    getMineStorage(){
        var oreColor = {
            'eron': '#C374FF',
            'ignetium': '#E24E47'
        };
        this.mineStorage = data.mines.map((mine) => ({
            name : mine.name,
            location : mine.location,
            capacity : mine.capacity,
            ore : mine.storage.map((_ore) => ({ 
                title: _ore.oreType, value: _ore.yield, color: oreColor[_ore.oreType]
            }))
        }));
        this.mineCount = data.mines.length;
    }
    
    render(){
        this.getMineStorage();
        const mineText = {
            "padding":"0px",
            "margin":"0px",
            "font-size":"20px"
        }
        const locationText = {
            "opacity":"0.5",
            "font-size":"16px"
        };

        const sumCard = {
            "margin": "20px 0px 0px 0px",
            "overflow-y": "hidden",
            "width": "100%",
            "display":"grid",
            "grid-template-columns": "1fr 3fr 1fr"
        };
        const sumPie = {
            "width": "80px",
            "height": "70px",
            "margin-left": "20px",
            "margin-right": "30px"
        };
        const sumList = {
            "width": "auto",
            "display": "block",
            "flex-direction": "column",

            "overflow-y": "auto"
        };
        const cardOre = {
            "background-color": "#2d2d2d",
            "margin": "0px 0px 5px 0px",
            "height": "30px"
        };
        return(
            <div className="card gr3">
                <h2 className="card-title">{this.state.header}</h2>
                <div className="card-content-list">
                    {this.mineStorage.map((mine) => (
                        <div className="card-mine">
                            <h3 style={mineText}>{mine.name} mine <span style={locationText}>{mine.location}</span></h3>
                            <div style={sumCard}>
                                <div style={sumPie}>
                                    <PieChart data={mine.ore} lineWidth="50" rounded="true"
                                        animate="true" totalValue={mine.capacity} background="#303030"/>
                                </div>
                                <div style={sumList}>
                                    {
                                        mine.ore.map((_ore) => <div className="card-ore-data" style={cardOre}>
                                            <p>{_ore.title}</p><p style={{"color":_ore.color, "background-color":"#242424"}}>{_ore.value}</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <div className="option-bar">
                                <div className="option">
                                    <div className="button"><img src={icon_stop}/></div>
                                    <div className="button"><img src={icon_play}/></div>
                                </div>
                                <div className="option">
                                    <div className="button"><img src={icon_cont}/></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card-option">
                    <div className="card-icon" style={{"background-color":"#cccccc"}}><img src={icon_cart}/></div>
                    <h3>{this.mineCount}</h3>
                </div>
            </div>
        );
    }
}

export default CardMines;