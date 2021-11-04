/************* DEFINITION D'UN OBJET ECRIT EN JSON? JAVASCRIPT OBJECT NOTATION **************/
let myBook = {

 

title: 'The Story of Tau',

 

author: 'Will Alexander',

 

numberOfPages: 250,

 

isAvailable: true

 

};

let bookTitle = myBook.title;  // "L'Histoire de Tao"

 

let bookPages = myBook.numberOfPages  // 250

/********************** BRACKET NOTATION ******************************/
let myBook = {

   title: "L'Histoire de Tao",

   author: "Will Alexander",

   numberOfPages: 250,

   isAvailable: true

};

let propertyToAccess = "title"

let bookTitle = myBook[propertyToAccess];  // "L'Histoire de Tao"

/******************** CREATION D'UNE CLASSE *******/
class Book {

constructor(title, author, pages) {


this.title = title;

 

this.author = author;

 

this.pages = pages;
 

}

}

let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);

 
/*
Cette ligne crée l'objet JSON suivant :
{

 

title: "L'Histoire de Tao",

 

author: "Will Alexander",

 

pages: 250

 
}
*/