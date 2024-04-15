let arrayOfStrings = [
    "This is the first line of text.",
    "And this is the second line of text.",
    "Finally, here is the third line of text."
];

function findStr(str, arr) {
  let result = arr.filter((elem) => {
     return elem.toLowerCase().includes(str.toLowerCase())
  })

  return result && result.lenght > 1 ? result : result[0];
}

console.log(findStr('This', arrayOfStrings));
console.log(findStr('Finally', arrayOfStrings));