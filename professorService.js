function buscarProfessorNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { id, nome: 'Dr. Silva', email: 'dr.silva@universidade.edu.br' , cpf: '123.456.789-00' };
}

module.exports = { buscarProfessorNoBanco };