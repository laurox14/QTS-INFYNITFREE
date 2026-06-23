//                 test CURSO

const cursoService = require('../cursoService');
const { obterNomeCurso } = require('../cursoController');
jest.spyOn(cursoService, 'buscarCursoNoBanco');

test('deve retornar o nome do curso simulado', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'ciencia da computação'
  });

  const nome = obterNomeCurso(1);

  expect(nome).toBe('ciencia da computação');
});
