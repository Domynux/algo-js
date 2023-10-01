class killer{
    constructor(name,hp){
        this.name=name
        this.hp=hp
    }
}
let jason = new killer ("Jason the killer", 100)

let perkSurvivor = [ "chad", "simp","gameur","depresif","fumeur","drogé"]
let nameSurvivor= ["DR.dre","Alexy","Louis","Alexis","Keanay","Florian", "Endrou","Jean-luke","Emmanuel","Leonardo","Yanis","Leo"]
var nameTirage = nameSurvivor[Math.floor(Math.random()*nameSurvivor.length)]

var tirage = perkSurvivor[Math.floor(Math.random()*perkSurvivor.length)]

stat(statTirage){
    if(statTirage==="chad"){
        this.lckDeathHit=0.3
        this.lckDodgeHit=0.7
        this.lckDeath=0.2
    }
    if(statTirage==="simp"){
        this.lckDeathHit=0.5
        this.lckDodgeHit=0.7
        this.lckDeath=0.2
    }
    if(statTirage==="gameur"){
        this.lckDeathHit=0.6
        this.lckDodgeHit=0.5
        this.lckDeath=0.4
    }
    if(statTirage===""){
        this.lckDeathHit=0.
        
    }


}

class survivor{
    constructor(){
        this.name=nameTirage
        this.perk=tirage
        this.lckDeath= stat(statTirage)
        this.lckDodgeHit = stat(statTirage)
        this.lckDeathHit = stat(statTirage)
    }
}

survivorOne=new survivor()



while (jason.hp == 0){
  
    
break

}
