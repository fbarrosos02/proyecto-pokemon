class Pokemon {

    constructor(name, attack, type, hpnow, hpmax, defense, moves) {
        this.name = name;
        this.attack = attack;
        this.type = type;
        this.hpnow = hpnow;
        this.hpmax = hpmax;
        this.defense = defense;
        this.moves = moves;
        this.curado = false;
    }
    heal() {
        if (this.curado == false) {
            this.curado = true;
            this.hpnow += (this.hpmax / 2);
            console.log(this.name + " recupeó vida HP: " + this.hpnow + "/" + this.hpmax);
    }
}
    
    ataque(defensor) {
        var readlineSync = require('readline-sync');
        console.log(`
=========================================
|     Movimientos disponibles:          |
=========================================
`);

        for (var i = 0; i < this.moves.length; i++) {
            console.log(`${i + 1}: ${this.moves[i].name}`);
        }

        console.log(`=========================================`);
        let nummove;

        do {
            nummove = readlineSync.question(`
===============================
| Selecciona un movimiento:   |
===============================
`);
        } while (nummove > this.moves.length || nummove < 1);
        let move = this.moves[nummove - 1];
        let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
        let damage = (this.attack / defensor.defense) * move.damage * randomFactor;
        console.log(`
======================================
| ${this.name} usó ${move.name}     |
======================================
`);
        defensor.hpnow = (defensor.hpnow - damage);
        
        if (defensor.hpnow <= 0) {
            defensor.hpnow = 0;
            console.log(`
            =========================================
            | Enhorabuena, ${defensor.name} ha sido  |
            |              derrotado!               |
            =========================================
            `);
        }

    }
    ataque2(defensor) {
        let nummove = Math.floor(Math.random() * 2);
        let move = this.moves[nummove];
        let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
        let damage = (this.attack / defensor.defense) * move.damage * randomFactor;
        console.log(`
    ======================================
    | ${this.name} usó ${move.name}     |
    ======================================
    `);
            defensor.hpnow = (defensor.hpnow - damage);
            if (defensor.hpnow > 0) {
                console.log(`
    =========================================
     | A ${this.name} le quedan: ${this.hpnow}  |
    =========================================
                `);
            }
            if (defensor.hpnow <= 0) {
                defensor.hpnow = 0;
                console.log(`
                =========================================
                | Mala suerte, ${defensor.name} ha sido  |
                |              derrotado!               |
                =========================================
                `);

    }
}
}
module.exports = Pokemon;