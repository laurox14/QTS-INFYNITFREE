const { somar, mensagemBoasVindas, qualMaior, parImpar, podeVotar, negPos} = require('./script');

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

test('retorna se a pessoa pode votar , voto opcional ou não pode votar.', () => {
  expect(podeVotar(17)).toBe('Você não é obrigado a votar');
});
test('retorna se é positivo, negativo ou igual a zero.', () => {
  expect(negPos(17)).toBe('o numero 17 é positivo');
});
