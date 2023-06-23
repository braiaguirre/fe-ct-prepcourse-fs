let stringok = 'abcdefg';
let stringChr = stringok.split('');
let nuevoString = '';

for (let i = 0; i < stringChr.length; i++) {
    if (stringChr[i] !== 'a' && stringChr[i] !== 'b' && stringChr[i] !== 'c') {
        nuevoString = nuevoString + stringChr[i];
    }
}
console.log(nuevoString);