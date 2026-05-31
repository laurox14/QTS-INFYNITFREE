const { somar, mensagemBoasVindas, qualMaior, parImpar, podeVotar, negPos, salBonus, dirigir, mes, conVogal, mediaArray, acesso} = require('./script');

// exercicio 
test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

// exercicio 
test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

// exercicio 1
test('retorna o maior', () => {
  expect(qualMaior(10, 20)).toBe(20);
});

// exercicio 2
test('retorna qual é par e qual é impar', () => {
  expect(parImpar(2, 3)).toBe('o primeiro numero 2 é par', 'o segundo numero 3 é impar');
});

// exercicio 3
test('retorna se a pessoa pode votar , voto opcional ou não pode votar.', () => {
  expect(podeVotar(17)).toBe('Você não é obrigado a votar');
});

// exercicio 4
test('retorna se é positivo, negativo ou igual a zero.', () => {
  expect(negPos(17)).toBe('o numero 17 é positivo');
});

// exercicio 5
test('recebe o salário e retorna o bônus.', () => {
  expect(salBonus(4000)).toBe(400);
});

// exercicio 6
test('exibe “pode dirigir” ou “não pode dirigir”', () => {
  expect(dirigir(18)).toBe('Você pode dirigir');
});

// exercicio 7
test('exibe se o mês é do primeiro semestre ou segundo semestre.', () => {
  expect(mes("março")).toBe('março é do primeiro semestre');
});

// exercicio 8
test('verifica se a letra é vogal ou consoante', () => {
  expect(conVogal("a")).toBe('a letra a é vogal');
});

// exercicio 9
test('calcula a média dos valores do array', () => {
  expect(mediaArray([10, 20, 30, 40, 50])).toBe(30);
});

// exercicio 10
test('verifica acesso válido', () => {
  expect(acesso('Admin', 123)).toBe('Conectado com sucesso!');
});

