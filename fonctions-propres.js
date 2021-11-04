/************** factoriser la fonction d'envoie de message ***********/
const sendWelcomeMessageToUser = (user) => {



if (user.online) {



if (user.accountType === "normal") {



       console.log("Hello " + user.name + "!");



} else {



      console.log("Welcome back premium user " + user.name + "!");



}



}



}



sendWelcomeMessageToUser(firstUser);



sendWelcomeMessageToUser(secondUser);



sendWelcomeMessageToUser(thirdUser);




/***********************************************************************************************/

const getWordCount = (stringToTest) => {



 const wordArray = stringToTest.split(' ');



return wordArray.length;



}



const getLetterCount = (stringToTest) => {


//split("x") ====> divise la chaine de caractére en un tableau de sous-chaine divisé a partir de x  et retourne le tableau
 const wordArray = stringToTest.split(' ');



 let totalLetters = 0;



 for (let word of wordArray) {



// retire la ponctuation pour ne compter que les lettres
word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");



totalLetters += word.length;



}



return totalLetters;



}



/*



** renvoie la longueur moyenne des mots



** arrondie à deux chiffres après la virgule



*/



const getAverageWordLength = (stringToTest) => {


//transformer une chaine de caractére en un nmbre floattant apres avoir analysé ce dernier (parsing )
//.toFixed(2)  =====> arrondiea a deux chiffres apres la virgule
return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));



}



const printStringStats = (stringToTest) => {



 console.log({



wordCount: getWordCount(stringToTest),



letterCount: getLetterCount(stringToTest),



averageWordLength: getAverageWordLength(stringToTest)



})



}
