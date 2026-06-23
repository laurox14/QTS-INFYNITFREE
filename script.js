function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

// exercicio 1
function qualMaior(x , y){
if(x>y){return x}
else{return y}
}

// exercicio 2
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

// exercicio 3
function podeVotar(x){
  if(x>18 && x<70){{return 'Você é obrigado a votar'}}
  if(x>16 && x<18){{return 'Você não é obrigado a votar'}}
  if(x>=70){{return 'Você não é obrigado a votar'}}
  if(x<=16){{return 'Você não pode votar'}}
}

// exercicio 4
function negPos(x){
  if(x>0){return `o numero ${x} é positivo`}
  if(x<0){return `o numero ${x} é negativo`}
  if(x==0){return `o numero ${x} é igual a 0`}
}

// exercicio 5
function salBonus(x){
  if(x<2000)
    return (x * 0.2)
}
  if(x>=2000 && x< 5000){
    return (x * 0.1)
}
  if(x>=5000){
    return (x * 0.05)
}

// exercicio 6
function dirigir(idade){
  if(idade<18){return 'Você não pode dirigir'}
  else{return 'Você pode dirigir'}
}

// exercicio 7
function mes(mes){
  if(mes=='janeiro' || mes=='fevereiro' || mes=='março' || mes=='abril' || mes=='maio' || mes=='junho'){
    return `${mes} é do primeiro semestre`
  }
  if(mes=='julho' || mes=='agosto' || mes=='setembro' || mes=='outubro' || mes=='novembro' || mes=='dezembro'){
    return `${mes} é do segundo semestre`
  }
  return 'mes invalido'
}

// exercicio 8
function conVogal(letra){
  if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    return `a letra ${letra} é vogal`
  }
  return`a letra ${letra} é consoante`
}

// exercicio 9
function mediaArray(valores){
  let soma = 0 
  for (let i = 0; i < valores.length; i++) { 
    soma += valores[i]
  }      
  return (soma/valores.length)
}

// exercicio 10
function acesso(nome,senha){
  if(nome=='Admin' && senha == 123){
    return 'Conectado com sucesso!'}
  return 'Acesso negado! Usuário ou senha incorretos!'

}



module.exports = { somar, mensagemBoasVindas, qualMaior, parImpar, podeVotar,negPos,salBonus,dirigir, mes, conVogal, mediaArray, acesso};
// export default { somar, mensagemBoasVindas };

