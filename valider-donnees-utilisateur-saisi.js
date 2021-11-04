/************ VALIDER DES DONNEES SUITE A DES EVENEMENTS ***********/

// evenement "onChange" : verifier les donnees des que l'utilisateur a fini de l'editer
// evenement "onInput" : verifier les donnes a qchque nouveau caractere


// verifier si ce qui a ete saisie commence par "Hello"
myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
    } else {
        isValid = false;
    }
});



/********************  VALIDATION PLUS COMPLEXE AVEC LE REGEX *************/

//Regex : verifier si un texte corresponde a une description que l'on a definie


// verifier si notre texte commence par la lettre "e" et est suivi d'aumoin 3 chiffres
function isValid(value) {
    return /^e[0-9]{3,}$/.test(value);
}

/********* CONTRAINTES HTML5 *******************/
 // validation directement dans le code HTML && attributs ajoutés pour empécher la soumission du formulaire

     /* attribut "type" pour les Inputs ====> text , password , email , tel , URL , date ....

     /* attributs de validation simple  ===>

          min  /  max  : fonctionne avec des champs de type nombre ou date. Cela permet de définir une valeur minimum et une valeur maximum autorisées ;

          required  : fonctionne avec à peu près tous les types de champs. Cela rend obligatoire le remplissage de ce champ ;

          step  : fonctionne avec les dates ou les nombres. Cela permet de définir une valeur d'incrément lorsque vous changez la valeur du champ via les flèches ;

          minlength  /  maxlength  : fonctionne avec les champs textuels (  text ,  url ,  tel ,  email ...). Cela permet de définir un nombre de caractères minimum et maximum autorisé.

      /* les patters && attribut "pattern" : definir un regex dans cet attribut qu'il doit respecter */

          <input type="text" pattern="[0-9]{,3}" /> // il oblige l'utilisateur a entrer que des chiffres avec un nombre maximum de chiffres egal a 3
