const Pokemon = require('./pokemon2');
const Move = require('./move2');

const allPokemon = [
    new Pokemon('Charmander', 10, 'Fuego', 100, 100, 15, [
        new Move('Ember', 30),
        new Move('Scratch', 20),
        new Move('Tackle', 20)
    ]),
    new Pokemon('Squirtle', 8, 'Agua', 100, 100, 10, [
        new Move('Water Gun', 25),
        new Move('Tackle', 20),
        new Move('Bite', 15)
    ]),
    new Pokemon('Bulbasaur', 9, 'Planta', 100, 100, 12, [
        new Move('Vine Whip', 20),
        new Move('Tackle', 20),
        new Move('Razor Leaf', 25)
    ]),
    new Pokemon('Pidgey', 7, 'Normal', 100, 100, 12, [
        new Move('Gust', 25),
        new Move('Tackle', 20),
        new Move('Quick Attack', 15)
    ]),
    new Pokemon('Rattata', 8, 'Normal', 100, 100, 12, [
        new Move('Bite', 25),
        new Move('Tackle', 20),
        new Move('Hyper Fang', 30)
    ]),
    new Pokemon('Machop', 12, 'Lucha', 100, 100, 13, [
        new Move('Low Kick', 25),
        new Move('Tackle', 20),
        new Move('Karate Chop', 30)
    ]),
    new Pokemon('Psyduck', 8, 'Agua', 100, 100, 10, [
        new Move('Water Gun', 25),
        new Move('Tackle', 20),
        new Move('Confusion', 15)
    ]),
    new Pokemon('Sandshrew', 9, 'Tierra', 100, 100, 10, [
        new Move('Scratch', 20),
        new Move('Tackle', 20),
        new Move('Sand Attack', 0)
    ]),
    new Pokemon('Geodude', 10, 'Roca', 100, 100, 10, [
        new Move('Tackle', 20),
        new Move('Rock Throw', 25),
        new Move('Defense Curl', 0)
    ]),
    new Pokemon('Ponyta', 13, 'Fuego', 100, 100, 14, [
        new Move('Ember', 30),
        new Move('Tackle', 20),
        new Move('Flame Charge', 25)
    ]),
    new Pokemon('Seel', 9, 'Agua', 100, 100, 10, [
        new Move('Water Gun', 25),
        new Move('Tackle', 20),
        new Move('Ice Shard', 15)
    ]),
    new Pokemon('Electrode', 15, 'Eléctrico', 100, 100, 15, [
        new Move('Thunder Shock', 30),
        new Move('Tackle', 20),
        new Move('Spark', 25)
    ]),
    new Pokemon('Pidgeotto', 11, 'Normal', 100, 100, 13, [
        new Move('Quick Attack', 20),
        new Move('Tackle', 20),
        new Move('Wing Attack', 25)
    ]),
    new Pokemon('Jigglypuff', 8, 'Normal', 100, 100, 8, [
        new Move('Pound', 15),
        new Move('Tackle', 20),
        new Move('Rollout', 25)
    ]),
    new Pokemon('Snorlax', 20, 'Normal', 150, 150, 30, [
        new Move('Body Slam', 40),
        new Move('Tackle', 20),
        new Move('Rollout', 25)
    ]),
    new Pokemon('Gengar', 16, 'Fantasma/Veneno', 100, 100, 12, [
        new Move('Lick', 20),
        new Move('Tackle', 20),
        new Move('Shadow Punch', 25)
    ]),
    new Pokemon('Mewtwo', 18, 'Psíquico', 130, 130, 20, [
        new Move('Confusion', 25),
        new Move('Tackle', 20),
        new Move('Psycho Cut', 40)
    ])
];
var readlineSync = require('readline-sync');
const randompokemon = Math.floor(Math.random() * allPokemon.length);
const randompokemon2 = Math.floor(Math.random() * allPokemon.length);
const pok1 = allPokemon[randompokemon];
const pok2 = allPokemon[randompokemon2];
let cont = true;
console.log(`
    ===============================
    | ¡A luchar contra            |
    |      Entrenador Isabel!     |
    ===============================
    `);
console.log(`
    =============================================
    | ${pok2.name} es el Pokémon enviado por    |
    |        Entrenadora Isabel                 |
    =============================================
    `);
console.log(`
    =============================
    | Adelante, ${pok1.name}    |
    =============================
    `);

// combate


do {
    do {
        decision = readlineSync.question(`
    =========================
    |    ELIGE UNA OPCIÓN    |
    =========================
    | 1. Curar               |
    | 2. Atacar              |
    | ${pok1.name} || ${parseInt(pok1.hpnow)} HP     |
    =========================
    `);
        if (decision !== '1' && decision !== '2') {
            console.log('Entrada no válida. Inténtalo de nuevo.');

        }
    } while (decision !== '1' && decision !== '2');

    if (decision == '1') {  
        if (!pok1.curado) {  
            pok1.heal();     
        } else {
            console.log("Ya estás curado, atacando en su lugar...");
            pok1.ataque(pok2);  
        }
    } else if (decision == '2') {  
        pok1.ataque(pok2);  
    }
    
    
    var decop = Math.floor(Math.random() * 2);  
    if (decop == 0) {  
        if (!pok2.curado) {  
            pok2.heal();     
        } else {
            console.log("El oponente ya está curado, atacando en su lugar...");
            pok2.ataque2(pok1);  
        }
    } else {  
        pok2.ataque2(pok1);  
    }
}
while (pok1.hpnow !== 0 && pok2.hpnow !== 0);
console.log("combate terminado");








