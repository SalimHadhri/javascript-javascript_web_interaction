/*********************************** TESTS UNITAIRES *****************/
// des fonctions uniques ou des classes
const getWordCount = (stringToTest) => {



 const wordArray = stringToTest.split(' ');



return wordArray.length;



}



const getLetterCount = (stringToTest) => {



 const wordArray = stringToTest.split(' ');



 let totalLetters = 0;



 for (let word of wordArray) {



word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");



totalLetters += word.length;



}



return totalLetters;



}
/*********************************** TESTS SUR OLES DEUX FONCTIONS: getWordCount &&&& getLetterCount  *********************/
const testSimpleWordCount = () => {



   const testString = 'I have four words!';



if (getWordCount(testString) !== 4) {


// console.error : afficher le message entant qu'erreeur sur la console
      console.error('Simple getWordCount failed!');



}



}



const testEdgeWordCount = () => {



   const testString = '             ';



if (getWordCount(testString) !== 0) {



      console.error('Edge getWordCount failed!');



}



}



const testSimpleLetterCount = () => {



   const testString = 'I have twenty one letters!';



if (getLetterCount(testString) !== 21) {



      console.error('Simple getLetterCount failed!');



}



}



const testEdgeLetterCount = () => {



   const testString = '")(&;//!!';



if (getLetterCount(testString) !== 0) {



      console.error('Edge getLetterCount failed!');



}



}

/************************ ARCHITECTURE DE TESTS ******************/
// tests complètes de votre code, à l'aide de fonctions et de syntaxe spécifiques

describe('getWordCount()', function() {



   it('should find four words', function() {



expect(getWordCount('I have four words!').to.equal(4));



});



   it('should find no words', function() {



expect(getWordCount('      ').to.equal(0));



});



});
