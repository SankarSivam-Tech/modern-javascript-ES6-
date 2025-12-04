// Set Object
// it allows only unique value.

const classroom=["bench","pencil","eraser","bench"]  //it shows two times bench in console

console.log(classroom);


const Classromm = new Set();

Classromm.add("bench" );
Classromm.add("pencil" );
Classromm.add("eraser" );
Classromm.add("bench" );
Classromm.add("bench" );

console.log(Classromm);
