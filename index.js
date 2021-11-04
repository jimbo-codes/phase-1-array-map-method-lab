const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  //reference the first letter of each, then apply capitlaization funct (can nest so each word gets "map'd"?)
  return capitalize(tutorials);
}

const first = "first string to fix"

function dothewalk(string2){
}
// Now you need to do this with map.

// you need to return this fixed string
function capitalize (string){
//   let finalarr = [];
// for(stringz of string){
  return string.map(legwork);
  // this works for each individual string.
  
}

function legwork(innerstring){
  let wordlen = 0;
  let prior;
  let string2;
  let counter = 0;
  let newstring = [];
  
  for(let i = 0; i< innerstring.length; i++){
    if(i===innerstring.length-1){
      console.log(string2);
      console.log(wordlen);
      string2 = innerstring.charAt(i-wordlen).toUpperCase() + innerstring.slice(i-wordlen+1,innerstring.length);
      newstring.push(string2);
        wordlen=0;    
        console.log(newstring);
    }  
    else if(innerstring.charAt(i)===" "){
        prior = i-wordlen; 
        string2 = innerstring.charAt(i-wordlen).toUpperCase() + innerstring.slice(i-wordlen+1,i);
        newstring.push(string2);
        wordlen=0;    
        counter ++;
    }else{wordlen++;
      counter ++;}
      console.log(counter)
  }
  newstring = newstring.join(' ');
  // finalarr.push(newstring);
  return newstring;
}
console.log(capitalize(tutorials))