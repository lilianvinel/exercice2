"use strict";
/* importation du module «fs» (file system) */
const fs = require("fs");

/* lecture synchrone, la fonction: fs.readFileSync() 
bloque l'éxécution des instructions suivantes */

let data = fs.readFileSync('js/04_fichier.txt');

console.log(data.toString());
console.log("Fin du programme");