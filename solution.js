function stepThroughWith(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i+1] === s[i]) {
            return true
        }
    }
    return false
}

console.log(stepThroughWith('moon')) // true
console.log(stepThroughWith('test')) // false
console.log(stepThroughWith('hello')) // true