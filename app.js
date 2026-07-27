let greet = "hello";// global scope

 function changegreet() {
    let greet = "namaste"; // function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
 }
console.log(greet);
changegreet();