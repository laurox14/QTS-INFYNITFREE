const componenteService = require('../componenteService');
const { obterNomeComponente, obterHorarioComponente } = require('../componenteController');

// transforma a função real em mock
jest.spyOn(componenteService, 'buscarComponenteNoBanco');

test('deve retornar o nome do componente simulado', () => {
  // definindo o que o mock vai retornar
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1,
    nome: 'João Mockado',
    horario: { inicio: '08:00', fim: '12:00', dias: ['segunda', 'quarta'] }
  });

  const nome = obterNomeComponente(1);
  const horario = obterHorarioComponente(1);

  expect(nome).toBe('João Mockado');
  expect(horario).toEqual({ inicio: '08:00', fim: '12:00', dias: ['segunda', 'quarta'] });
});