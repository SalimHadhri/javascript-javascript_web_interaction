/*     	TYPE DE DONNEES PRIMITIFS PRINCIPAUX*/
/*
number (nombre) ; // positif ou négatif ;; entier ou décimaux

string (chaîne de caractères) ;

boolean (valeur logique).
*/

let integerCalculation = 1 + 2;  // donne 3



let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004

let userIsSignedIn = true;



let userIsAdmin = false;

let firstName = "Will";



let lastName = 'Alexander';

let wholeName = firstName + " " + lastName;  // valeur: "Will Alexander"
console.log(wholeName)

/************************ STRING INTERPOLATION ************************/
const myName = 'Alexander';

const salutation = `Bienvenue sur mon site ${myName}! `;

console.log(salutation);   //retournera “Bienvenue sur mon site Alexander!” 

/************ 	AUTRES TYPES PRIMITIFS DANS JAVASCRIPT ****************/
/*
	null
	undefined
	symbol
*/
