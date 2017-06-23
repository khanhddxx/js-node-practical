//app.js
'use strict';

function asyncMethod(message, num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message + " " + num);
        }, 500);
        resolve(num + 1);
    });
}

async function main() {
    var one = await asyncMethod('Open Db Connection', 0);
    var two = await asyncMethod('Find User', one);
    var three = await asyncMethod('Validate User', two);
    var four = await asyncMethod('Do Stuff', three);
}

main();
