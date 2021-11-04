// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {

      console.log('Première valeur:' + valeur1);

      console.log('Deuxième valeur:' + valeur2);

}

// On exécute la fonction

afficherDeuxValeurs(12, 'Bonjour');

// On obtient dans la console

// > Première valeur:12 

// > Deuxième valeur:Bonjour 
let ratings = [1,5,6,7] ;

function rate (ratings){


if(ratings.length === 0){

    return 0;

}
let sum = 0;

/********* FOR..OF BEST PARCOURS METHOD *********************/
  for (let rating of ratings) {

    sum += rating;

  }
return sum / ratings.length;

}
let finalRate = rate(ratings) ;
console.log(finalRate) ;


