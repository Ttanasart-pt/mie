import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import PlayerData from '../data/playerData';
import oreData from '../data/oreData.json';
import './card.css';

class CardSummary extends React.Component{
    constructor(props){
        super(props);
        
        setInterval(() => {
            this.setState(() => ({}));
        }, 1000);
    }
    getOreStorage(){
        this.oreStorage = [];
        for (const key in oreData) {
            this.oreStorage.push({ title: key, value: PlayerData.getAllOreStore(key), color: oreData[key].color});
        }
        this.totalCapacity = PlayerData.getAllMinesCapacity();
    }

    render(){
        this.getOreStorage();
        const sumCard = {
            "overflow-y": "hidden",
            "width": "100%",
            "display":"grid",
            "grid-template-columns": "1fr 2fr"
        };
        const sumPie = {
            "width": "120px",
            "height": "120px",
            "margin-left": "20px",
            "margin-right": "40px"
        };
        const sumList = {
            "width": "auto",
            "display": "block",
            "flex-direction": "column",

            "overflow-y": "auto"
        };
        return(
            <div className="card">
                <h2 className="card-title">Summary</h2>
                <div className="card-content" style={sumCard}>
                    <div style={sumPie}>
                        <PieChart data={this.oreStorage} lineWidth="50" rounded="true" 
                            animate="true" totalValue={this.totalCapacity} background="#282828"/>
                    </div>
                    <div style={sumList}>
                        {
                            this.oreStorage.map((ore) => <div className="card-ore-data">
                                <p>{ore.title}</p><p style={{"color":ore.color}}>{ore.value}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CardSummary;