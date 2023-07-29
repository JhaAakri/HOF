const strings = ["assignment", "problem", "media", "upload"];
const Pattern = strings.filter((str) => str.charAt(0) === 'a' || str.charAt(str.length - 1) === 'a');
console.log(Pattern); 
