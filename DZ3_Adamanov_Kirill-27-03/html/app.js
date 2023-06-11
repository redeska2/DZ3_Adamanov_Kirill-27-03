const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];


const tagCounts = {};


tags.forEach(tag => {
  if (tagCounts[tag]) {
    tagCounts[tag] += 1;
  } else {
    tagCounts[tag] = 1;
  }
});


for (const tag in tagCounts) {
  console.log(`${tag}: ${tagCounts[tag]}`);
}



const numbers = [10, 20, 30, 50, 235, 3000, 5000439857];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i].toString(); 

  if (number.startsWith('1') || number.startsWith('2') || number.startsWith('5')) {
    console.log(number);
  }
}
// или подругому 2 вариант тут мы не используем функцию startsWith а по идексу находим 

// const numbers = [10, 20, 30, 50, 235, 3000, 5000439857];

// numbers.forEach((number, index) => {
//   const numberString = number.toString();
//   const firstDigit = numberString.charAt(0);
//   if (firstDigit === "1"  firstDigit === "2"  firstDigit === "5") {
//     console.log(numberString);
//   }
// });









for (let i = 20; i >= 0; i--) {
  console.log(i);
}
