//警告弹窗----------------------------
//alert("Hello hewei");


//交换两变量的值----------------------------
//声明变量
var numberA = 50;
var numberB = 90;

//使用第三个变量交换值
var tmp;
tmp = numberA;
numberA = numberB;
numberB = tmp;
console.log(numberA);
console.log(numberB);

//不用第三个变量交换值
numberA = numberA + numberB;
numberB = numberA - numberB;
numberA = numberA - numberB;
console.log(numberA);
console.log(numberB);

//函数定义----------------------------
function logType(a) {
    console.log(typeof a);
    return;
}

logType(numberA);
numberA = "不是数字";
logType(numberA);


//数字最大值最小值----------------------------
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//isNaN判断，若是数字则返回false----------------------------
console.log(isNaN(numberA));
//parse函数，判断标量的数据类型
console.log(parseInt(numberA));

//输入框----------------------------
//var msg = prompt("请输入:");
//if(isNaN(msg)) {
//    console.log("is not a number");
//}else{
//    console.log("is a number");
//}

//需要转移的特殊符号，换行\n，制表符\t,双引号\" 等等----------------------------
console.log("a\nb\nc\n");

//字符串的不可变,拼接后，之前的字符串将无法控制，会被回收。浪费内存。----------------------------
var str = "hello IT";
str = str + "ITD";
console.log(str);

//类型转换----------------------------
//转字符串
var numberC = 1991;
//1.String()
logType(String(numberB));
//2.toString(),括号内可填写转换的进制类型2,8,10,16..任意进制
logType(numberC.toString());
logType(numberC.toString(2));//转八进制后转字符串
logType(numberC.toString(8));//转八进制后转字符串
logType(numberC.toString(10));//默认十进制后转字符串
logType(numberC.toString(16));//转十六进制后转字符串
//3.+""
logType(numberB+"");
/**
* String()和toString()的区别：
* undefined和null类型没有toString()的方法,
* 而String()有.
*/
//转数字类型
var exStr = "100100101";
//1.Number()
logType(Number(exStr));
//2.parseInt()
logType(parseInt(exStr)); 
//3.parseFloat()
logType(parseFloat(exStr));
/**
* parseInt(string,number);说明
* parmas string : 转换的字符串
* parmas number : 以什么进制来转换成字符串
*/
console.log(parseInt(exStr,5));

/**
* Number()和parseInt(),parseFloat()的区别:
* Number()转换非纯数字的格式的变量，会成NaN
* parse不会，会滤过英文变成数值类型
*/
//转布尔类型
//1.Boolean()
logType(Boolean(exStr));
//2.隐式转换，作为条件的时候。例如if，while，switch
if (numberA){
    
}
//3.取反转换 !()







