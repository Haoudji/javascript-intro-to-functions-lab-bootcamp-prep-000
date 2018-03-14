function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
  
}

function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  var uppercase = '';
  var lowercase = 'hello!';
  var mixedCase = 'I love you, Grandma.';
  if(lowercase === lowercase.toLowerCase() ){
    return "I can't hear you"
  }else if(uppercase === uppercase.toUpperCase()){
    return ("YES INDEED!")
  }else if(mixedCase === mixedCase.toLowerCase() || mixedCase === mixedCase.toUpperCase()){
    return "I love you, too"
  }
  
}