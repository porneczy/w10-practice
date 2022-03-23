console.log("asd");

let arr = ["Apple", 0, "0", null, NaN, undefined, false, {}]
/* let result = arr.filter( item => item )*/
function name2(item) {
    return item 
}

let result = arr.filter(name2)



console.log(result);

let filterezett = []
for (let i = 0; i < arr.length; i++) {
        if( name2(arr[i]) ){
            filterezett.push(arr[i])
        }
}
console.log(filterezett);




let tomb = [4,20,9,11,1,2,3]

//irasd ki mindegyik négyzete
//ha kivonok hármat akkor páros szám lesz-e

let negyzet = tomb.map( x => x*x )
console.log(negyzet);
let minusThree = tomb.filter( x => ( (x-3) % 2 === 0 ) )
console.log(minusThree);