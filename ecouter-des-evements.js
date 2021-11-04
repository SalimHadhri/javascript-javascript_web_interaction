/* Un événement est une réaction à une action émise par l'utilisateur,
comme le clic sur un bouton ou la saisie d'un texte dans un formulaire. */

/* addEventListener(<event>, <callback>) : <event> : nom de l'événement à écouter
                                           <callback> : la fonction à appeler dès que l'événement est exécuté.

/******************* EVENEMENT ON CLICK ******************/
// récupérer l'élément qui correspond à notre lien
// element.addEventListener('click', onClick);
// onClick ====> fonction a appeler a chaque reception d'un click par l'utilisateur

const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

/******************************* preventDefault() ***************************************/
// default action : redirection de notre page web vers le lien sélectionné
// preventDefault() : indiquer de ne pas executer l'evenement par default qui la redirection de notre page vers le lien clické
// preventDefault() : marche pour tout tye d'evement execute par default (exemple : onsubmit ==>empêchera le formulaire de s'envoyer au serveur)

const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});

/************************ stopPropagation() *************************************/
// stopPropagation() : empêcher la propagation de l'événement vers son parent
// NB : lorsque l'evenement est declenche sur l'element cible, il s'execute sur la cible puis il est ensuite remonté vers les éléments parents qui sont aussi dans la cible.
// stopPropagation() : empecher que d'autres elements recoivent l'evenement
elementInterieur.addEventListener('click', function(event) {
    event.stopPropagation();
    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});
