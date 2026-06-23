const professorService = require('../professorService');
const { obterDadosProfessor } = require('../professorController');

// transforma a função real em mock
jest.spyOn(professorService, 'buscarProfessorNoBanco');

test('deve retornar os dados do professor simulado', () => {
  // definindo o que o mock vai retornar
  professorService.buscarProfessorNoBanco.mockReturnValue({
    id: 1,
    nome: 'Dr. Silva',
    email: 'dr.silva@universidade.edu.br',
    cpf: '123.456.789-00'
  });

  const dados = obterDadosProfessor(1);

  expect(dados).toEqual({
    nome: 'Dr. Silva',
    email: 'dr.silva@universidade.edu.br',
    cpf: '123.456.789-00'
  });
});

