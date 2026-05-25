const { somar, mensagemBoasVindas, qualMaior, parImpar} = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('retorna o maior', () => {
  expect(qualMaior(10,20)).toBe(20);
});

test('retorna qual é par e qual é impar', () => {
  expect(parImpar(2,3)).toBe('o primeiro numero 2 é par', 'o segundo numero 3 é impar');
});
