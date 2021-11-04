/******************** METHODE D'INSTANCE *******************/
//une fonction faisant partie d'une classe, et qui agit sur une instance de cette classe
class BankAccount {


   constructor(owner, balance) {
      this.owner = owner;

      this.balance = balance;
   }

    showBalance() {


    console.log("Solde: " + this.balance + " EUR");


   }


}

// newAccount est constante, c'est la référence à l'instance qui est constante
//on peut toujours apporter des modifications à cette instance
const newAccount = new BankAccount("Will Alexander", 500);

console.log(newAccount.owner) ;

newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console


/**************    METHOD DE MODIFICATION DES PROPRIETES : deposit(amount) et withdraw(amount) {amount : montant a deposer ou retirer}    ********/
//deposit (amount) ====> depot d'un montant
//withdraw(amount) ======> retrait d'un montant


class BankAccount2 {
constructor(owner, balance) {



this.owner = owner;



this.balance = balance;



}



showBalance() {



      console.log("Solde: " + this.balance + " EUR");



}


deposit(amount) {



      console.log("Dépôt de " + amount + " EUR");



this.balance += amount;



this.showBalance();



}


withdraw(amount) {


if (amount > this.balance) {


         console.log("Retrait refusé !");


} else {


         console.log("Retrait de " + amount + " EUR");


this.balance -= amount;


this.showBalance();


}


}


}
const newAccount2 = new BankAccount2("Will Alexander", 500);

newAccount2.deposit(200) ;
newAccount2.withdraw(100) ;

/****************************** METHODES STATIQUES **************/
// methode statique :  n'est pas lié a une onstance particuliére de la classe mais a la casse elle-meme
// methodes utilitaires : pas besoin d'une instance de la classe
//boite a outils de fonctions qu'on utliserez souvent

/* l'objet math (objet global) est n objet statique qu'on appelle directement sans "new" : il contient plusieures fonctions prédéfinits */
const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]



const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495

/**************************** NOTRE PROPRE FONCTION STATIQUE ***************/
// pas de constructeur car on n'a pas besoin de l'instancier mais d'utiliser directement les fonctions prédéfinit dedant
class BePolite {

static sayHello() {

      console.log("Hello!");
}


static sayHelloTo(name) {

      console.log("Hello " + name + "!");
}


static add(firstNumber, secondNumber) {

return firstNumber + secondNumber;


}


}


BePolite.sayHello(); // imprime "Hello!""

BePolite.sayHelloTo("Will"); // imprime "Hello Will!""

const sum = BePolite.add(2, 3); // sum = 5

console.log(sum) ;
