//promise : 3 státusza van, 1: éppen vmi történik és utána vmit csinálhatunk az eredménnyes és erre számit a kód
const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (msg==="Hello") {
                return reject("something error happend")
            }
            return resolve(msg)
        }, 1000);
    } )
}

showMessageLater("Hello2").then( (result) => {
    console.log(result);
    showMessageLater("Hello3").then( (result) => {
        console.log(result);
        showMessageLater("Hello4").then( (result) => {
            console.log(result);
        } )
    } )
} ).catch( (err) => {
    console.log(err);
} )


