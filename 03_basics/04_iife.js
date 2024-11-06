(function chai(){
    console.log(`DB connected`)
})(); //⚠️⚠️⚠️⚠️always use ; b/w two iife statement othwe it will get error

//________________👉named IIFE_________________________________________________________
(function chai(){//
    console.log(`DB connected`)
})();
//________________👉unnamed IIFE________________________________________________________
(() => {
    console.log(`hello `)
})();

//it is also same as function in different way
((name) => {
    console.log(`hello ${name} `)
})("moto")