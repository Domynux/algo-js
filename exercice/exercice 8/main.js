class pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.isLuck=luck
    }

    attackPokemon(pokemon) {
         pokemon.hp -= pokemon.attack - pokemon.defense
        }
    }
   



let darkrai = new pokemon("Darkray", 105, 90, 1700,0.5 )
let giratina = new pokemon("Giratina", 1200,100,2500,0.1 )
console.log(darkrai,giratina)



while(darkrai.hp >0 && giratina.hp > 0 ){

    var sentenceA= (darkrai.name + " a fait descendre les pv de son adversaire a " + giratina.hp)
    var sentenceB= (giratina.name + " a fait descendre les pv de son adversaire a " + darkrai.hp)
    if(Math.random()<darkrai.isLuck){
        darkrai.attackPokemon(giratina)
    
    
        console.log(sentenceA)
        }
        else{
            console.log(darkrai.name+ " a raté son attaque")
        }
    if(giratina.hp <= 0){
        console.log(giratina.name+ " est vancu ")
        break
    }
    if(Math.random()<giratina.isLuck){
        giratina.attackPokemon(darkrai)
    
    
        console.log(sentenceB)
        }
        else{
            console.log(giratina.name+ " a raté son attaque")
        }
    
   
    if(darkrai.hp <= 0 ){
       console.log(darkrai.name+" est vancu")
        break
    }
}   