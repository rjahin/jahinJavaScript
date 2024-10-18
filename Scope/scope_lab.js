
var globalVar = "I am global Variable";
let globalLet = "I am also global, but scoped with Let";
const globalConst = "I am global constant";

{
    //Block Scope
    var blockVar = " I am a blocked scope var";
    let blockLet = "I am blocked scope let";
    const blockConst = "I am a block scoped const";

}
//Block Scope
//console.log(blockVar);
//console.log(blockLet);

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

function show(){
    var functionVar = "I am a blocked scope var";
    let functionLet = "I am blocked scope let";
    const functionConst = "I am a block scoped const";

}
show();
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
