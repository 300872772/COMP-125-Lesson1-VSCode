// custom javascript

//self executing anonnymous function 

//IIFE - Immidiately Invoked Function Expression

(function(){
    
   console.log("App Started"); 
   
   //variable decoration and Initialisation
   var randomnumber = 0;
   
   randomnumber=Math.floor((Math.random()*10)+1);
   
   console.log(randomnumber);
})();


