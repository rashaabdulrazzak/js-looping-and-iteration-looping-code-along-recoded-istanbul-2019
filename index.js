// Code your solutions in this file
let wrapgifts =["Ada", "Brendan", "Ali"];
let str = birthday;
function writeCards(wrapgifts, str)
{
  let  msgfift=[];
  for(let i=0;i < wrapgifts.length;i++){
    msgfift.push(`Thank you, ${wrapgifts[i]}, for the wonderful birthday gift!"`);
    console.log(`Thank you, ${wrapgifts[i]}, for the wonderful birthday gift!"`);
  }
  return msgfift;
}

function countDown(num){
    while (num >=0){
      console.log(`${num}`)
      num--;
    }
}
countDown(10);