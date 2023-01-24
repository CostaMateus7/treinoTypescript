// ENUM -> Estrutura de dados não ordenado

enum Cores {
  VERMELHO = 100,
  ROXO = 1212,
  LARANJA = 111,
}
enum Cores {
  LILÁS = 121212,
}

function escolhido(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhido(111);
