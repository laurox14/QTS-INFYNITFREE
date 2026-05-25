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

function podeVotar(x){
  if(x>18 && x<70){{return 'Você é obrigado a votar'}}
  if(x>16 && x<18){{return 'Você não é obrigado a votar'}}
  if(x>70){{return 'Você não é obrigado a votar'}}
  if(x<16){{return 'Você não pode votar'}}
}

function negPos(x){
  if(x>0){return `o numero ${x} é positivo`}
  if(x<0){return `o numero ${x} é negativo`}
  if(x==0){return `o numero ${x} é igual a 0`}
}

module.exports = { somar, mensagemBoasVindas, qualMaior, parImpar, podeVotar,negPos};
// export default { somar, mensagemBoasVindas };

