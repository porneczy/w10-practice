const arr1 = [420,69,911]
const arr2 = [1,2,3]

const arr3 = [...arr1]
arr3.push(6)
console.log("arr1: ", arr1);
console.log("arr3: ", arr3);

const arr4 = [...arr1, ...arr2]
console.log("arr4: ", arr4);


const userProfile = {
    name: "Lil Jesus",
    age: 420,
    country: "Heaven"
}
const userProfile2 = {...userProfile, gender: "Male", name: "Másik név"}
console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);


