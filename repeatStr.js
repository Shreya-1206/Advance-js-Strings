let repeatStr = (str, count) =>{
    return Array.from(new Array(count), elem => str).join('')
}
console.log(repeatStr('d', 10));

//or use repeat method

console.log('sh'.repeat(9));

const emojis =(score) => {
    let emojis = ["😠", "😞", "😐", "😃", "🤩"];

    switch(score){
        case 1: 
          return emojis[0]
      
        case 2: 
         return emojis[1].repeat(2)

        case 3: 
         return emojis[2].repeat(3) 

        case 4:
            return emojis[3].repeat(4) 
        case 5:
            return emojis[4].repeat(5) 
        default:
            return emojis[4]
    }
}
console.log(emojis(4));