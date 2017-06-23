//app.js
'use strict';
function asyncMethod(message){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
                console.log(message);
            }, 500);
            resolve();
    });
}

async function main(){
    var one = await asyncMethod('Open Db Connection', 0);
    var two = await asyncMethod('Find User', one);
    var three = await asyncMethod('Validate User', two);
    var four = await asyncMethod('Do Stuff', three);
}

main();