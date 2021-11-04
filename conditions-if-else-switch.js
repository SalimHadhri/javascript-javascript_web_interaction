let isUserLoggedIn = true;



if (isUserLoggedIn) {



   console.log("Utilisateur connecté!");



} else {



   console.log("Alerte, intrus!");



}

/*
<   inférieur à ;

<=   inférieur ou égal à ;

==   égal à ;

>=   supérieur ou égal à ;

>   supérieur à ;

!=   différent de.
*/

const numberOfSeats = 30;



const numberOfGuests = 25;



if (numberOfGuests < numberOfSeats) {



// autoriser plus d'invités



} else {



// ne pas autoriser de nouveaux invités



}

if (numberOfGuests == numberOfSeats) {



// tous les sièges sont occupés



} else if (numberOfGuests < numberOfSeats) {



// autoriser plus d'invités



} else {



// ne pas autoriser de nouveaux invités


}

/*
== : egalité simple de valeur mais pas de type : 5=="5" =>>> true
=== : egalité stricte, valeur et type doivent estre egaux : 5==="5" ====> false
*/

/* != !== : pareil */

/*
&&  – ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;

||    – OU logique – pour vérifier si au moins une condition est vraie ;

!    – NON logique – pour vérifier si une condition n'est pas vraie.
*/

let userLoggedIn = true;



let hasUserPremiumAccount = true;



let userHasMegaPremiumAccount = false;



userLoggedIn && userHasPremiumAccount; // true



userLoggedIn && userHasMegaPremiumAccount; // false



userLoggedIn || userHasPremiumAccount; // true



userLoggedIn || userHasMegaPremiumAccount; // true



!userLoggedIn; // false



!userHasMegaPremiumAccount; // true

/****************************   PORTEE DES VARIABLES // BLOCK SCOPE *****************/
// let  ou   const  ne peuvent être vues ou utilisées qu'à l'intérieur du bloc de code dans lequel elles sont déclarées.
// var : n'ont pas un scope de bloc mais un scope de fonction
//Un bloc de code, aussi souvent appelé bloc tout court, est une section de code incluse entre accolades  {}.

let userLoggedIn = true;



if (userLoggedIn) {



   let welcomeMessage = 'Welcome back!';



} else {



   let welcomeMessage = 'Welcome new user!';



}



console.log(welcomeMessage); // renvoie une erreur

/******************************* definir la variable  a l'exterieur du bloc if,else ********************/
let userLoggedIn = true;



let welcomeMessage = ''; // déclarer la variable ici



if (userLoggedIn) {



welcomeMessage = 'Welcome back!'; // modifier la variable extérieure



} else {



welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure



}



console.log(welcomeMessage); // imprime 'Welcome back!'

/************************************* INSTRUCTION SWITCH **************************/
/****  vérifier la valeur d'une variable par rapport à une liste de valeurs attendues, et réagir en conséquence  *****/
let firstUser = {



name: "Will Alexander",



age: 33,



accountLevel: "normal"



};



let secondUser = {



name: "Sarah Kate",



age: 21,



accountLevel: "premium"



};



let thirdUser = {



name: "Audrey Simon",



age: 27,



accountLevel: "mega-premium"



};

/*************************************************************************************************/

switch (firstUser.accountLevel) {



case 'normal':



      console.log('You have a normal account!');



break;



case 'premium':



      console.log('You have a premium account!');



break;



case 'mega-premium':



      console.log('You have a mega premium account!');



break;



default:



      console.log('Unknown account type!');



}
