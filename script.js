function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}


function qualMaior(x , y){
if(x>y){return x}
else{return y}
}

function parImpar(x,y){
  
  if(x%2==0){
    return `o primeiro numero ${x} é par`
  }else{
    return `o primeiro numero ${x} é impar`
  }
  if(y%2==0){
    return `o segundo numero ${y} é impar`
  }else{
    return `o segundo numero ${y} é par`
  }

}

module.exports = { somar, mensagemBoasVindas, qualMaior, parImpar};
// export default { somar, mensagemBoasVindas };

