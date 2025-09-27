let nome_usuario  = "";
let elemento = document.querySelector("#nome-usuário");

while(nome_usuario == ""){
    nome_usuario  = prompt("Qual o seu nome?");
}

if( nome_usuario==null){
    elemento.textContent = "Seja muito bem vindo!!";
}

else{
    elemento.textContent = nome_usuario;
}

