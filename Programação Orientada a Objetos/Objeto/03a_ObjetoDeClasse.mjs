import {UmaClasse} from "./03a_umaClasse.mjs" 

let umaClasse = new UmaClasse("Primeiro atributo")

let {capturaPrimeiroAtributo: umAtributo, 
    outroAtributo} = umaClasse;

console.log("um atributo: "+ umAtributo)
console.log("um atributo: "+outroAtributo)