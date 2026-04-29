const { somar, mensagemBoasVindas, qualMaior} = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('retorna o maior', () => {
  expect(qualMaior(10,20)).toBe(20);
});
