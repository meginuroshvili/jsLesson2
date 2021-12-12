var number = 1;

number += 10;
console.log(number)
// icvleba mnishvneloba cvladis da xdeba 11

// number type operators : +; -; *; /; **, %.

console.log(number * 2)
console.log(number / 2)
console.log(number ** 2)
console.log(number % 2) 

var ricxvi = 5;
var cifri = 10;
var string = 'snow';

console.log(ricxvi+cifri)
console.log(ricxvi+string)

var testArray = [10, 20, 30, 40]
var testObject = {0: 10, 1: 20, 2: 30, 3: 40}


testArray.push(50) //წევრის დამატება ბოლოში
testArray.splice(3, 0, 700) //წევრის დამატება
testArray.splice(0, 1) //წევრის წაშლა
console.log(testArray)

//არაიში წევრის ინდექსის გაგება
console.log(testArray.indexOf(40))

var variable = 100;
if(variable > 200) {
    console.log('მეტი')
}else {
    console.log('ნაკლები')
}

var bool = variable > 200;
console.log(bool)
var bool = variable < 30;
console.log(bool);
var bool = variable === 100;
console.log(bool);

variable += 300;
if(variable > 200) {
    console.log('მეტი')
}else {
    console.log('ნაკლები')
}

var variable1 = 10;
var counter = 0;

while(variable1 >= 3 ) {
    console.log(variable1)
    variable1 --;
    if(counter === 10) break;
    counter ++;
}

var variable2 = 63;
var counter2 = 0;

while(variable2 >= 50) {
    console.log(variable2)
    variable2 --;
    if(counter2 === 30) break;
    counter2 ++;
}

var variableN = 100;
var counterN = 0;

while(variableN >= 20){
    console.log(variableN);
    variableN -= 10;
    if(counterN  === 10) break;
    counterN ++;
}

var variableN2 = 50;
var counterN2 = 0;

while(variableN2 <= 100){
    console.log(variableN2);
    variableN2 += 10;
    if(counterN2 === 6) break;
    counterN2 ++;
}

var variableS = 25;

for(var i = 0; i < 25; i++){
    console.log(variableS)
    variableS --;
}

