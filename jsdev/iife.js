// IIFE : Immediately Invoked Function Expression
// aka used for creating a JS Module
// aka called as self-invokable and excutable JavaScript

(function(){
    var a = 100;
    console.log('In IIFE a = ' + a);
    a++;
})();

console.log('Out of IIFE a = ' + a);
