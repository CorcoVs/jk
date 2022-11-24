/*const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.76;

let markBMI = markWeight / markHeight ** 2;
let markBMI2 = markWeight / (markHeight * markHeight);

console.log(`Mark's BMI is ${markBMI} using the first forlmula and ${markBMI2} using the second formula`);

johnBMI = johnWeight / johnHeight ** 2;
johnBMI2 = johnWeight / (johnHeight * johnHeight);

console.log(`John BMI is ${johnBMI} using the first forlmula
and ${johnBMI2} using the second formula`);

markBMI.toFixed(2);
let isMarkhigher;
if (isMarkhigher = (markBMI > johnBMI)) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
};





const age = 16;
let yearsLeft = 18 - age;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    console.log(`Sarah cannot start driving license, wait another ${yearsLeft} years`)
}

const birthYear = 2011;

let century
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century):

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(`There are ${2022 - Number(inputYear)} years till 2022`);

console.log(Number('John'));
console.log(typeof(NaN));

console.log(`I'am ${23} years old`);
console.log('23' - '10' - 3);
console.log('23' + '2');

let n = '1' + 1;
n = n - 1;
console.log(n);



// 5 falsy values: 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`Don't spend all ${money} lei`);
} else {
    console.log('Mergi la furat boss!');
}


const age = '18';
if (age === 18) console.log('You just became :D(strict)'); // always prefered

if (age == 18) console.log('You just became :D(loose)'); // many specials rules
*/

const money = Number(prompt("Cati bani ai?"));
console.log(money);
console.log(typeof money); 
console.log(typeof Number(money));

if (money > 100) {
    window.location.replace("https://sterotren.com/produs/danabol-10mg/");
} else {
    alert("Mergi la furat boss!");
}