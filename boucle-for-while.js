/*********** boucle for ssans ordre a retenir ******/
const numberOfPassengers = 10;



for (let i = 0; i < numberOfPassengers; i++) {



   console.log("Passager embarqué !");



}

/*************** boucle sur les tableaux : for + condition **********/
for (let i = 0; i < passengers.length; i++) {



   console.log("Passager embarqué !");


}

/**************** boucle for plus facile a l'utilisation : for..in **************/
const passengers = [



"Will Alexander",



"Sarah Kate'",



"Audrey Simon",



"Tao Perkington"



]



for (let i in passengers) {



   console.log("Embarquement du passager " + passengers[i]);



}

/********************** BOUCLE FOR..OFF ***********************/
//Indice précis d'un élément n'est pas nécessaire pendant l'itération,
//vous n'avez pas à vous inquiéter des indices et des tableaux



const passengers = [



"Will Alexander",



"Sarah Kate",



"Audrey Simon",



"Tao Perkington"



]



for (let passenger of passengers) {



   console.log("Embarquement du passager " + passenger);



}

/************************ for..off avec des tableaux compliqué contenant des objets *********************/

const passengers = [



{



name: "Will Alexander",



ticketNumber: 209542



},



{



name: "Sarah Kate",



ticketNumber: 169336



},



{



name: "Audrey Simon",



ticketNumber: 779042



},



{



name: "Tao Perkington",



ticketNumber: 703911



}



]



for (let passenger of passengers) {



   console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);



}

/*************************** BOUCLE WHILE *************************/


let seatsLeft = 10;



let passengersStillToBoard = 8;



let passengersBoarded = 0;



while (seatsLeft > 0 && passengersStillToBoard > 0) {



passengersBoarded++; // un passager embarque



passengersStillToBoard--; // donc il y a un passager de moins à embarquer



seatsLeft--; // et un siège de moins



}



console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
