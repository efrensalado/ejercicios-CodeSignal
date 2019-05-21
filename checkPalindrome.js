function checkPalindrome(inputString) {
    nuevaFrase = inputString.toLowerCase().replace(/\s/g, "");
    
    fraseInversa = nuevaFrase.split("").reverse().toString();
    
    for(var i = 0; i < ((fraseInversa.length) - 1); i++){
        fraseInversa = fraseInversa.replace(",", "");
    }
    
    if(nuevaFrase == fraseInversa){
        res = true;
    }else{
        res = false
    }
    
    return res;
}


console.log(checkPalindrome("aabaa"));

console.log(checkPalindrome("abac"));

console.log(checkPalindrome("a"));

console.log(checkPalindrome("az"));

console.log(checkPalindrome("abacaba"));

console.log(checkPalindrome("z"));

console.log(checkPalindrome("aaabaaaa"));

console.log(checkPalindrome("zzzazzazz"));

console.log(checkPalindrome("hlbeeykoqqqqokyeeblh"));

console.log(checkPalindrome("hlbeeykoqqqokyeeblh"));
