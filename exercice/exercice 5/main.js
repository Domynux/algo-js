var a = "Jean"
var b = "Paul" 
var vrai = "Nom similaire "
var faux = "Nom différent"
var result = checkName(a,b) 

function checkName( nom1 ,nom2 ) {
    if (nom1 === nom2) {
        return vrai
    } else {
        return faux 
    } 
}
    
console.log(result)
