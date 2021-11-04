/*******  recherche binaire : chercher un élément dans un array trié pour savoir s'il s'y trouve. *******/


/** fonction non recursive **/

const findElement = (array, thingToFind) {



   for (let element of array) {



if (element === thingToFind) {



return true;



}



}



return false;



}

/*********************** FONCTION RECURSIVE ****************/

/************************ RECHERCHE BINAIRE *************/

const binarySearch = (array, thingToFind, start, end) => {



// base case
if (start > end) {



return false;



}


//element median: on commence par l'element median
//Math.floor : arrondir vers le bas pour s'assurer de trouver l'element entier
//start, end : les index du tableau a parcourir
   let mid = Math.floor((start + end) / 2);



if (array[mid] === thingToFind) {



return true;



}

if (thingToFind < array[mid]) {



// il faut rechercher dans la première moitié



return binarySearch(array, thingToFind, start, mid - 1); // on utilise (mid - 1) car on sait que l'on n'a pas besoin de l'élément mid, il a déjà été vérifié !



} else {



// il faut rechercher dans la deuxième moitié



return binarySearch(array, thingToFind, mid + 1, end);



}

}

/***** RECURSIVITE : FONCTION FACTORIEL ********/

const factoriel = (number) =>{

  if(number <= 1) return 1;
  else return (number * factoriel(number-1));
}

