//Type object
const user: {
  name: string;
  age: number;
  cel: number;
  cpf?: number;
  [key: string]: unknown;
} = {
  name: 'Mateus',
  age: 27,
  cel: 9999,
  cpf: 121,
  estado: 'MG',
};

console.log(user);
export { user };
