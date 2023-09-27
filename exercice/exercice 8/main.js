class pokemon{
    constructor(name,attack, defense, hp, luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.isLuck=luck
    }
   
}


let drakrai= new pokemon("Darkray",105, 90, 70,0.3 )
let giratina= new pokemon("Giratina",120,100,150,0.5 )
console.log(drakrai,giratina)

function attackPokemon (poke1,poke2){
    let dmg1 = poke1.attack-poke2.defense
    let dmg2 = poke2.attack-poke1.defense
}



