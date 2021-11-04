/********************* DETECTER LE MOUVEMENT DE LA SOURIS *******************************/


// evenement mousemove : ====> fournit un objet de type MouseEvent
/* cet objet nous permet de recuperer :

    clientX  /  clientY  : position de la souris dans les coordonnées locales (contenu du DOM) ;

    offsetX  /  offsetY  : position de la souris par rapport à l'élément sur lequel on écoute l'événement ;

    pageX  /  pageY  : position de la souris par rapport au document entier ;

    screenX  /  screenY  : position de la souris par rapport à la fenêtre du navigateur ;

    movementX  /  movementY  : position de la souris par rapport à la position de la souris lors du dernier événement  mousemove
*/

elt.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
});


/**************************** LISEZ LE CONTENU D'UN CHAMP TEXTE ***********************/


// evenement : change ====> fonctionne avec les éléments de type  <input> ,  <select> , <textarea> , <checkbox> et <radio>
//NB : <checkbox>  ===> cases a cocher && <radio> ===> cases a choix unique
//declenche lorsque  le champ perd le focus, c'est-à-dire lorsque l'utilisateur passe à autre chose en cliquant ailleurs et qu'il a fini sa saisie pour ce champ.

/* event.target.value : target ===> élément sur lequel s'est produit l'événement, c'est-à-dire un champ de type  <input>  dans notre cas.
                        value ===> recuperer ou definir la valeur d'un champ
*/



//evenement : input == change &&& difference : déclenché dès que le contenu du champ est modifié, même si l'utilisateur n'a pas encore fini de saisir ce qu'il souhaite.

input.addEventListener('input', function(event) {
    output.innerHTML = event.target.value;
});
