var playlist1 = ["Demons screaming", "Appreciate Life", "milk man ","SPIT IN MY FACE", "Anissa - wejdenne" ]
var playlist2 = ["Demons screaming", " Appreciate Life", " milk man ","SPIT IN MY FACE", "Anissa - wejdenne" ]
class client {
    constructor(name,hp){
        this.name=name
        this.hp= hp
    }
    traject (toto){

        var nbrChagementTaxi = 0
        var nbrFeuxRouges = 0
        while( nbrFeuxRouges < 30 || this.hp > 0  ){
            
            nbrFeuxRouges++
            var musicRandom = toto[Math.floor(Math.random()*toto.length)]
            console.log("Au "+ nbrFeuxRouges+" feu rouge il a eu "+musicRandom)
            if (musicRandom === "Anissa - wejdenne"){
                    this.hp -= 1
                    nbrChagementTaxi ++

                }
            if (this.hp === 0 ){
                    console.log(this.name+ " ne peut plus support l'affreuse musique et décide de ce suicide")
                    break
                }
            if(nbrFeuxRouges === 30){
                    console.log(this.name+" a survecu a une journé de plus face aux musique affreuse")
                    break
                }

            }

        }
}

let chad = new client ( "Jone (gigachad)", 10)
chad.traject(playlist1)



