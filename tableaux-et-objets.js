/* CREER UN TABLEAU */

//let guests = [];

let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

/* ACCES AUX ELEMENTS D'UN TABLEAU ( INDICE 0 ECT...*/

let firstGuest = guests[0]; // "Sarah Kate"



let thirdGuest = guests[2]; // "Will Alexander"



let undefinedGuest = guests[12] ;// undefined

/*CREATION D'UN OBJET */

let artistProfile = {



name: "Tao Perkington",



age: 27,



available: true



};



let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus



artistProfile.available = false; // modification de l'objet


console.log(allProfiles) ; // affiche { nom: "Tao Perkington", âge: 27, disponible: false }
document.write(allProfiles) ;


/* COMPTAGE DES ELEMENTS */
let guests2 = ["Will Alexander", "Sarah Kate", "Audrey Simon"];



let howManyGuests = guests2.length; // 3

/* AJOUT D'UN ELEMENT A LA FIN D'UN TABLEAU */
guests2.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests

/* AJOUT D'UN ELEMENT AU DEBUT D'UN TABLEAU */
guests2.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests

/* SUPPRIMER LE DERNIER ELEMENT D'UN TABLEAU */
guests2.pop(); // supprimer le dernier élément du tableau

console.log(guests2) ;
document.write(guests2) ;

