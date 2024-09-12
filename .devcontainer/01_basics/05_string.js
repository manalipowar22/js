 const name ="Manali"
 const repoCount = 50

//  console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo Count is $ {repoCount}`);

const gameName = new String('manali-mp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    manali     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://manali.com/manali%26powar"

console.log(url.replace('%26','-'))

console.log(url.includes('manali'))
console.log(url.includes('monday'))
 
console.log(gameName.split('-')); 