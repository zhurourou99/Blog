

var crypto = require('crypto');
//不仅可以加密还可以加严
var s = crypto.createHmac('md5','333')
    .update('hello').digest('hex');

console.log(s);