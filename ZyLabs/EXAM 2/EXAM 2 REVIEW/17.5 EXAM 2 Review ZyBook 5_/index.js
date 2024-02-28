function calcWordFrequencies() {
    let object = new Map();
    let input = prompt("Enter a list of words separated by spaces:");
    let string = input;
 
    for (word of string.split(' ')) {
     if (object.get(word) == null) object.set(word, 0);
     if (object.get(word) !== null) object.set(word, object.get(word) + 1);
    }
 
    for (word of string.split(' ')) {
     console.log(`${word} ${object.get(word)}`);
    }
}