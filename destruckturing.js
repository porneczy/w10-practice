const userProfile = {
    name: "Lil Jesus",
    age: 420,
    country: "Heaven"
}
/* const name = userProfile.name
const age = userProfile.age */

//a fnetiből lett az első

/* const {name, age} = userProfile
console.log("name: ", name);
console.log("age: ", age); */

//ha van egy objerktumunk akkor a kulcsértékpárokat fel tudjuk bontani és ki tudjuk hámozni, majd új változóba rakni.
//nem tudjuk átnevezni a változót


/* const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}

logNameAndAge(userProfile) */



 const arr1 = [420,911,69,1]
/*const first = arr1[0]
const second = arr1[1]
console.log("first number: ", first);
console.log("second number: ", second); */

/* const [a, b] = arr1
console.log("a: ", a);
console.log("b. ", b); */

const [x, ...y] = arr1
console.log("x: ", x);
console.log("y: ", y);
