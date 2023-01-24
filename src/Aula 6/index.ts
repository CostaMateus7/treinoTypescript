// Tupla

const dataClient1: [number, string, string?] = [12, 'mateus'];
const dataClient2: readonly [number, string] = [10223, 'mateus'];
dataClient1[0] = 100;
dataClient1[1] = '102';
console.log(dataClient1);
console.log(dataClient2);
