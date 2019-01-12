"use strict";

//Self-Executing Anonymous Function
//IIFE - Immediately Invoked Function Expression
(function(){

    function Start(){
        //Reminder: to inject var use ${var}
        console.log('%cApp Started...',
        "font-size: 18px; color: green;");

    }

    window.addEventListener("load",Start);
})();