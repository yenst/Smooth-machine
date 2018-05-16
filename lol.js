let code = 'Mag ik je nummer';
let abc = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];

let toHack=[];

let codeArr = code.split('');
codeArr.forEach(letter =>{
  toHack.push('x');
});

var printArray = function(array) {
  let string = '';
  array.forEach(letter => {
    string+= letter + ' ';
  })
  return string;
}

let cursor = 0;
let i = 0;

var nextBrute = function(){
  if(cursor<toHack.length){
    toHack[cursor]=abc[i];
    if(codeArr[cursor]==abc[i]){
      cursor ++;
      i = 0;
    }
    console.log(printArray(toHack));
    i++;
  }
}

setInterval(nextBrute,50);
