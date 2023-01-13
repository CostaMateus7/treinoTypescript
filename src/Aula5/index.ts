export function Uppercase(...args: string[]): string[] {
  return args.map((x) => x.toUpperCase());
}

const ex1 = Uppercase('a', 'b', 'c');

console.log(ex1);

export function reduceArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac + valor, 1);
}
console.log(reduceArgs(1, 2, 3, 4));

export function reduceString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
console.log(reduceString('a', 'b', 'c'));
