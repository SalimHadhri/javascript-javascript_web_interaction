/*************** MODIFIER UN ELEMENT ******************/
/*
innerHTML : entrer du texte représentant un contenu HTML
            expl: "<p>Voici un exemple de contenu pour <strong>innerHTML</strong></p>"

textContent :  entrer un simple texte qui ne sera pas interprété comme étant du HTML
*/

/*
<div id="parent">
</div>
*/

let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
/*
<div id="main">
    <ul>
        <li>Elément 1</li>
        <li>Elément 2</li>
    </ul>
</div>
*/

/******************************* MODIFIER DES CLASSES *******************************/
/*
classList : accéder directement à la liste des classes d'un élément
FONCTIONS PREDEFINIS : add(<string>, [<string>, ...] )  : ajoute la ou les classes spécifiées ;
                        remove(<string>, [<string>, ...] ) : supprime la ou les classes spécifiées ;
                        contains(<string> )  : vérifie si la classe spécifiée est contenue par cet élément ;
                        replace(<old>, <new> ) : remplace l'ancienne classe par la nouvelle classe.
*/
elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"): // Remplacera oldClass par newClass si oldClass était présente sur l'élément

/************************************** CHANGEMENT DE STYLE D'UN ELEMENT *****************************/
/*
style : récupérer et modifier les différents styles d'un élément.
element.style.backgroundColor = '#000'; : modifier la couleur d'arrière-plan d'un élément*/

elt.style.color = "#fff";      // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

/********************************************* MODIFIER LES ATTRIBUTS ***********************************/
/*
setAttribute : définir ou remplacer les attributs d'un élément
element.setAttribute(<name>, <value> ) : prend en paramètres le nom de l'attribut et sa valeur et ne retourne rien.
*/

// elt fait reference a n element INPUT
elt.setAttribute("type", "password");   // Change le type de l'input en un type password
elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
elt.getAttribute("name");               // Retourne my-password

/***************************************** CREER DE NOUVEAUX ELEMENTS *************************/
/*
document.createElement :  permettre de créer un nouvel élément du type spécifié, puis nous pourrons l'insérer dans notre DOM
document.createElement(<tag> ): prend en paramètre le nom de la balise de notre élément et nous renvoie l'élément nouvellement créé
*/
const newElt = document.createElement("div"); // ne fait pas encore partie du document

/********************************** AJOUTER DES ENFANTS *****************************/
/*
appendChild : permet d'ajouter un élément à la liste des enfants du parent depuis lequel la fonction est appelée.
parentNode.appendChild(<element>) : prend en paramètre l'élément à ajouter en tant qu'enfant. L'élément depuis lequel on appelle cette fonction devient donc le parent de notre élément.
*/
const newElt = document.createElement("div");
let elt = document.getElementById("main");

elt.appendChild(newElt);


/******************************** SUPPRIMER ET REMPLACER DES ELEMENTS **************************/
/*
removeChild : supprimer un element
replaceChild :remplacerun element
parentNode.removeChild(<element>) : prend en paramètre l'élément à supprimer du parent et retourne cet élément.
parentNode.replaceChild(<newElement>, <oldElement>) :  prend en paramètres le nouvel élément ainsi que l'élément à remplacer, et retourne ce dernier.
*/
const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt); //ajouter un élément à la liste des enfants du parent

elt.removeChild(newElt);    // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article



