var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var Telefone = document.getElementById("Telefone");

var cep = document.getElementById("CEP");

var logadouro = document.getElementById("logadouro");

var Número = document.getElementById("logadouro");

var Complemento = document.getElementById("logadouro");

var Bairro = document.getElementById("logadouro");

var Cidade = document.getElementById("logadouro");

var Estado = document.getElementById("logadouro");

var saida = document.getElementById("saida-de-dados");

function alertar(event){
    //alert("Você clicou no botão!!!" + "" +nome.value);

    //var numero = 7;
    //var resultado = numero%2;
    //if(resultado == 0){
   // }
   
   saida.innerText= "Nome" + nome.value +
    "\n Email: " + email.value +
     "\n Telefone: " + Telefone.value +
     "\n CEP:" + cep.value +
     "\n Logadouro:" + Logadouro.value +
     "\n Número:" + Número.value +
     "\n Complemento:" + Complemento.value +
     "\n Bairro:" + Bairro.value +
     "\n Cidade:" + Cidade.value +
     "\n Estado:" + Estado.value ;
}
