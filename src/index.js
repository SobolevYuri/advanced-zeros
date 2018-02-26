module.exports=function getZerosCount(number, base){
  let zeroNumber=number, bs=base;
  let current, sumCur, degr;
  let i=2;

while(i<=bs)
  {
    if(bs%i === 0){
      current=number;
      degr=sumCur=0;

   while(current/i > 0){
        current= Math.floor(current/i);
        sumCur+= current;
      }

 while(bs%i === 0){
        bs= bs/i;
        degr++;
      }

if(Math.floor(sumCur/degr)<zeroNumber){
  zeroNumber=Math.floor(sumCur/degr);
}
    }
    i++;
  }
  return zeroNumber;
}