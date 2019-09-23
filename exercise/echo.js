echo("echo", 10)

function echo(str, num) {
    for(var i = 0; i < num; i++) {
    console.log(str);
    }
}

var cat = require('cat-me');
console.log(cat());