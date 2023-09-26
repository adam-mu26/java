function toCamelCase(text) {
    let words = text.split(/[-_]/);
    if (words.length <= 1) {
        return text;
    }
    
    let camelCaseWords = [words[0]].concat(words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)));
    
    let camelCaseText = camelCaseWords.join('');
    
    if (text.charAt(0).toUpperCase() === text.charAt(0)) {
        camelCaseText = camelCaseText.charAt(0).toUpperCase() + camelCaseText.slice(1);
    }
    
    return camelCaseText;
}


console.log(toCamelCase("hello-world"));  // Output: "helloWorld"
console.log(toCamelCase("snake_case_example"));  // Output: "snakeCaseExample"

