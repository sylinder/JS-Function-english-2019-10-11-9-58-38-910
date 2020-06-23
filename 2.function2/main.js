function palindrome(message) {
    var len = message.length;
    var half_len = Math.floor(len / 2);
    for (var i = 0; i < half_len; i++) {
        if (message.charAt(i) != message.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("hello"));
console.log(palindrome("abcba"));
