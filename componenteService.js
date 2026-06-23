function buscarComponenteNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { id, nome: 'João Mockado', horario: { inicio: '08:00', fim: '12:00', dias: ['segunda', 'quarta'] } };
}

module.exports = { buscarComponenteNoBanco };