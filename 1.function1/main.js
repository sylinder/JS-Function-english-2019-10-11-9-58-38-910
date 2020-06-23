function reverseString(message) {
    var msg = message.split("");
    var half_len = Math.floor(msg.length / 2);
    var len = msg.length;
    var i = 0;
    while (i < half_len) {
        var tmp = msg[i];
        msg[i] = msg[len - 1 - i];
        msg[len - 1 - i] = tmp;
        i++;
    }
    return msg.join("");
}

console.log(reverseString("hello"));

