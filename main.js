// Number of hours slept per night/
const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
//
const grumpyHours = []
const happyHours = []
for (const grumpy of hours ){
if (grumpy <= 6) {
    grumpyHours.push(grumpy)
}
else {
    happyHours.push(grumpy)
}
}


console.log(`I was grumpy on ${grumpyHours.length} hours`);
console.log('I was happy on ' + happyHours.length  + ' this week')