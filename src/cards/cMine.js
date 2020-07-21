import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import data from '../data/playerData.json';
import icon_stop from '../svg/stop.svg';
import icon_play from '../svg/play.svg';
import icon_cont from '../svg/contracts.svg';
import './card.css';

class CardMine extends React.Component{
    constructor(props){
        super(props);

        setInterval(() => {
            this.setState(() => ({}));
        }, 1000);
    }
    onMineActive = () => {
        data.mines.forEach(mine => {
            if(mine.name == this.props.mine.name) mine.active = 1;
        });
        this.props.mine.active = 1;
        this.setState(() => ({}));
    }
    onMineInactive = () => {
        data.mines.forEach(mine => {
            if(mine.name == this.props.mine.name) mine.active = 0;
        });
        this.props.mine.active = 1;
        this.setState(() => ({}));
    }
    render(){
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
            <div className="card-mine">
                <h3 style={mineText}>{this.props.mine.name} mine <span style={locationText}>{this.props.mine.location}</span></h3>
                <div style={sumCard}>
                    <div style={sumPie}>
                        <PieChart data={this.props.mine.ore} lineWidth="50" rounded="true"
                            animate="true" totalValue={this.props.mine.capacity} background="#303030"/>
                    </div>
                    <div style={sumList}>
                        {
                            this.props.mine.ore.map((_ore) => <div className="card-ore-data" style={cardOre}>
                                <p>{_ore.title}</p><p style={{"color":_ore.color, "background-color":"#242424"}}>{_ore.value}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className="option-bar">
                    <div className="option">
                        <div className={"button " + (this.props.mine.active == 1? "inactive" : "active")} onClick={this.onMineInactive} ><img src={icon_stop}/></div>
                        <div className={"button " + (this.props.mine.active == 1? "active" : "inactive")} onClick={this.onMineActive}><img src={icon_play}/></div>
                    </div>
                    <div className="option">
                        <div className="button"><img src={icon_cont}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardMine;