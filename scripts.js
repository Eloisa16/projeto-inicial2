var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var email = document.getElementById("email");

var Telefone = document.getElementById("Telefone");

var cep = document.getElementById("CEP");

var logadouro = document.getElementById("logadouro");

var numero = document.getElementById("numero");

var complemento = document.getElementById("complemento");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cidade");

var estado = document.getElementById("estado");

var saida = document.getElementById("saida-de-dados");

function alertar(event){
    //alert("Você clicou no botão!!!" + "" +nome.value);

    //var numero = 7;
    //var resultado = numero%2;
    //if(resultado == 0){
   // }

   const url =`https://viacep.com.br/ws/${cep.value}/json`;

   fetch(url)
   .then(resposta=>resposta.json())
   .then(dados=>alert(dados.bairro))
   

   
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
