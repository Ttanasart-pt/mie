import data from '../data/playerData.json';
import conData from '../data/contractData.json';

class PlayerData{
    static update(){
        data.sessionStep += 1;

        data.mines.forEach(mine => {
            if(mine.active === 1 && data.sessionStep % mine.cycle === 0){
                mine.yields.forEach(yld => {
                    var stored = false;
                    var sto = mine.storage.reduce((sto, a) => sto.yield + a.yield);
                    var yldMin = Math.min(mine.capacity - sto, yld.yield);
                    mine.storage.forEach(sto => {
                        if(sto.oreType === yld.oreType){
                            sto.yield += yldMin;
                            stored = true;
                        }
                    });
                    if(!stored){
                        mine.storage.push({"oreType": yld.oreType, "yield": yldMin});
                    }
                });
            }
        });
    }

    static getAllMinesCapacity(){
        return data.mines.reduce((mine, a) => a.capacity + mine.capacity);
    }
    static getAllOreStore(ore){
        var i = 0;
        data.mines.forEach(mine => {
            mine.storage.forEach(sto => {
                if(sto.oreType == ore) i += sto.yield;
            });
        });
        return i;
    }

    static contractComplete(name){
        var toPop = null;
        conData.contracts.forEach(con => {
            if(con.name === name){
                var ready = true;
                con.ore.forEach(o => {
                    if(o.yield > this.getAllOreStore(o.oreType)) ready = false;
                });
                if(ready){
                    con.ore.forEach(o => {
                        var y = o.yield;
                        data.mines.forEach(mine => {
                            mine.storage.forEach(sto => {
                                if(sto.oreType === o.oreType){
                                    var red = Math.min(sto.yield, y);
                                    sto.yield -= red;
                                    y -= red;
                                }
                            });
                        });
                    });
                    data.money += con.reward;
                    toPop = con;
                }
            }
        });
        if(toPop != null) 
            conData.contracts = conData.contracts.filter((con) => con.name !== toPop.name);
    }
}

export default PlayerData;