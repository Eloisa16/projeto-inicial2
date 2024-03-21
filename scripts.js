var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var Telefone = document.getElementById("Telefone");

var cep = document.getElementById("CEP");

var logadouro = document.getElementById("logadouro");

var numero = document.getElementById("logadouro");

var complemento = document.getElementById("logadouro");

var bairro = document.getElementById("logadouro");

var cidade = document.getElementById("logadouro");

var estado = document.getElementById("logadouro");

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
     "\n Logadouro:" + logadouro.value +
     "\n Número:" + numero.value +
     "\n Complemento:" + complemento.value +
     "\n Bairro:" + bairro.value +
     "\n Cidade:" + cidade.value +
     "\n Estado:" + estado.value ;
}
