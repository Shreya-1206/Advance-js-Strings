const colours= [
    "The artist painted the sky with vibrant colors, evoking a sense of joy and wonder.",
    "The spelling 'color' is commonly used in American English, while 'colour' is the preferred spelling in British English.",
    "The autumn leaves displayed a beautiful array of hues, showcasing nature's palette of colors."
];

const pattern = /colou?rs?/gi ;

// console.log(pattern.exec(colours)[0]);
// console.log(pattern.exec(colours)[0]);
// console.log(pattern.exec(colours)[0]);
let result;
while((result = pattern.exec(colours)) !== null){
    console.log(result[0])
}

const actor ="Charlize Theron captivates audiences with her chameleon-like ability to embody diverse characters, infusing each role with raw emotion and undeniable charisma.";

function findActor (word, str){
    const result = new RegExp(str, 'gi');
    return result.test(str);
}

function findActorWithSearch (word, str){
    const pat = new RegExp(str, 'gi');
    return str.search(pat);
}
console.log(findActor("Theron", actor));
console.log(findActorWithSearch("Theron", actor));

const emailsSentence = "john.doe@example.com and jane.smith@example.org showcase the versatility of email patterns, embodying the classic structure of usernames followed by domain names, with both adhering to standard conventions of email address formatting.";

function findEmails(str){
    const pattern = /[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}/g;
    const detect = str.match(pattern)

    return detect && detect.length > 0 ? detect : detect[0];

}

console.log(findEmails(emailsSentence));


