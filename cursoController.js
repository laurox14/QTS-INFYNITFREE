const { buscarCursoNoBanco } = require('./cursoService');

function obterNomeCurso(id) {
  const curso = buscarCursoNoBanco(id);
  return curso.nome;
}

module.exports = { obterNomeCurso };