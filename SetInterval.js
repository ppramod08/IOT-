var counter=0;
var interval = setInterval(function(){
if(counter <= 10)
{
console.log(Date()+"****"+counter);
counter++;
}
else
clearInterval(interval);
}
,1000);




