/**
 * 散列算法 摘要算要
 * 把任意一个长度的(字节数组 ！== 字符串)转成固定长度的字符串
 * 1. 不同的输入一定会产生不同的输出
 * 2. 相同的输入一定会产生相同的输出
 * 3. 输出的结果不能返推出输入的内容
 *
 */
var crypto = require('crypto');
//列出所有摘要算法
console.log(crypto.getHashes());
var s  = crypto.createHash('md5')
    //update指定要计算的内容
    .update('hello')
    .update('world')
    //输出  不加hex是buffer
    .digest('hex');//hex十六进制
console.log(s);
