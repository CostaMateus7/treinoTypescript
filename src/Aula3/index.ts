// VOID

const pessoa = {
  nome: 'Mateus',
  sobrenome: 'Costa',
  thisNome(): void {
    console.log(this.nome + this.sobrenome);
  },
};
pessoa.thisNome();
export { pessoa };
