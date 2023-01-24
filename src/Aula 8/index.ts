// Tipo never -> retorna um erro

function deuruim(): never {
  throw new Error('Deu Ruim');
}

deuruim();
