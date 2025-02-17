alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
//o parseInt pega apenas a parte inteira e o Math.random ele multiplica um numero aleatorio * e soma mais um
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
//prompt e a caixa para colocar informacoes
let chute;

//variavel de tentativas
let tentativas = 1;

//enquanto o chute nao for igual ao numeroSecreto 
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

    //se o chute for igual ao numero secreto
if(chute == numeroSecreto) {
    //break serve para quebrar o looping, entao colocamos a mensagem fora dele
    break;

  //se nao for igual ao numeroSecreto fazer uma comparacao com um novo if
} else {

    //se o numero secreto for maior que o chute alert (numero secreto e maior que o chute)
    if (chute > numeroSecreto) {
        alert(`o número secreto é menor que ${chute}!`);
    
       
        //se o numero for menor que o chute 
    }  else {
            alert(`o número secreto é maior que ${chute}!`);
        }

        //pegando o valor da variavel tentativa e somando +1
        tentativas ++   
    }
}
    //se tentativa e maior que 1 tentativas se nao tentativa
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'

    // aqui temos a variavel numeroSecreto, tentativas e palavraTentativa (que ajuda a saber se vai dar a resposta no plural ou singular)
    alert(`Incrível, o número esta correto! O número secreto foi o (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`)
  
    

