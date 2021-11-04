/*DOM : Document Object Model (c'est-à-dire "modèle d'objet de document", en français)
	Inteerface de programmation qui est une représentation du HTML d'une page web et qui permet
  d'accéder aux éléments de cette page web et de les modifier avec le langage JavaScript. */

/*DOCUMENT :  Cet objet, auquel vous avez directement accès dans votre code JavaScript, est le point de départ du DOM.
Il représente votre page (votre document) entière  */

/* DOCUMENT :  contient les fonctions dont vous aurez besoin pour retrouver les éléments que vous cherchez.*/


/********** document.getElementById() ****************/

// <p id="my-anchor">My content</p> sera retrouvé grace a la fonction : getElementById(<id>)
const myAnchor = document.getElementById('my-anchor');

/************* document.getElementsByClassName() **********/

/* <div>
    <div class="content">Contenu 1</div>
    <div class="content">Contenu 2</div>
    <div class="content">Contenu 3</div>
</div>
*/

const contents = document.getElementsByClassName('content'); // on retrouve la liste des elements ayan la classe "content"
const firstContent = contents[0];

/*************** document.getElementsByTagName() *****************/
/* rechercherez tous les éléments avec un nom de balise bien précis
(par exemple tous les liens (  a  ), tous les boutons (  button  )...). */
/*getElementsByTagName(<name>) : prend en paramètre le nom de la balise
à rechercher et vous retournera la liste des éléments correspondants.

/*
<div>
    <article>Contenu 1</article>
    <article>Contenu 2</article>
    <article>Contenu 3</article>
</div>
*/
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];

/***************** document.querySelector() ***********************/

// un sélecteur qui permet de cibler certains éléments en mélangeant plusieurs procédés.

/* exemple : document.querySelector("#myId p.article > a")
recherche dans l'élément ayant pour id  #myId , les éléments de type  <p>
qui ont pour classe  article , afin de récupérer le lien (  <a> ) */

/*
<div id="myId">
    <p>
        <span><a href="#">Lien 1</a></span>
        <a href="#">Lien 2</a>
        <span><a href="#">Lien 3</a></span>
    </p>
    <p class="article">
        <span><a href="#">Lien 4</a></span>
        <span><a href="#">Lien 5</a></span>
        <a href="#">Lien 6</a>
    </p>
    <p>
        <a href="#">Lien 7</a>
        <span><a href="#">Lien 8</a></span>
        <span><a href="#">Lien 9</a></span>
    </p>
</div>
*/

const elt = document.querySelector("#myId p.article > a"); // ========> Lien 6
// querySelector() ====> ne renvoie pas une liste des résultats, mais le premier élément qui correspond à la recherche.
// querySelector(<selector>) =====>  prend en paramètre le sélecteur et vous retournera le premier élément trouvé, ou  null  si aucun élément n'a été trouvé.

/************** querySelectorAll ====> querySelector()  mais avec tous les elements retrouvés */

/************************************ RECHERCHE DEPUIS UN ELEMENT *****************************/

// element.children  : cette propriété nous retourne la liste des enfants de cet élément ;
// element.parentElement  : cette propriété nous retourne l'élément parent de celui-ci ;
//element.nextElementSibling  /  element.previousElementSibling  : ces propriétés nous permettent de
//          naviguer vers l'élément suivant / précédent <<<<<de même niveau que notre élément.>>>>

/*
<div id="parent">
    <div id="previous">Précédent</div>
    <div id="main">
        <p>Paragraphe 1</p>
        <p>Paragraphe 2</p>
    </div>
    <div id="next">Suivant</div>
</div>
*/
const elt = document.getElementById('main');
/*
elt.children ===> les éléments de type  p  qui sont les enfants de l'élément  #main ;
elt.parentElement ====> retournera la  div  qui a l'id  parent
elt.nextElementSibling =====>  retourne l'élément qui a l'id  next
elt.previousElementSibling =====> retournera l'élément qui a l'id  previous
*/
