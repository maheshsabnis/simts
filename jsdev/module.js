var module = (function(){
    var x = 100;

    function power(a,b){
        return Math.pow(a,b) + x;
    }
    function addSquare(a,b){
        return (a*a) + 2*a*b+(b*b) + x;
    }

    // return module members using an object aka JSON or 
    // aka Object Literal

     // pow is the Key literal having value as power
     // square is the Key literal having value as addSquare
    return {
        pow:power, 
        square:addSquare
    };
})();

console.log('Power is = ' + module.pow(20,4));
console.log('Square is = ' + module.square(10,20));
