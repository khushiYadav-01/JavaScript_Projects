   function timing(){
const  timer = document.getElementById("root");

 const now = new Date();
 const IndianTime = now.toLocaleTimeString();
 timer.innerHTML = IndianTime;
   } 
setInterval(timing,1000); // new change
 
 