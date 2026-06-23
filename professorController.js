const { buscarProfessorNoBanco } = require('./professorService');

function obterDadosProfessor(id) {
  const professor = buscarProfessorNoBanco(id);
  return { nome: professor.nome, email: professor.email, cpf: professor.cpf };
}

module.exports = { obterDadosProfessor };