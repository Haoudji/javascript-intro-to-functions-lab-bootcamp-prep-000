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
  var uppercase = "HELLO!";
  var lowercase = "hello!"
  var mixedCase = "Hi there!"
  
  if(uppercase === uppercase.toLowerCase() ){
    return "I can't hear you"
  }else if(lowercase === lowercase.toUpperCase()){
    return "YES INDEED!"
  }else if(mixedCase === mixedCase.toLowerCase() || mixedCase === mixedCase.toUpperCase()){
    return "I love you, too"
  }
  
}