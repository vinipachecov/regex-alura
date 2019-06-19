
// Using with split
const arquivo = '100,200-150,200;20';
const splitted = arquivo.split(/[,;-]/);
console.log(splitted)

// Using with patterns (match)

const codigos = 'A322B555C1580F78349G2222';
const codes = /[A-Z]\d+/g;
console.log(codigos.match(codes));
