let inputNome = document.getElementById('nomeUsuario');
let inputEmail = document.getElementById('inputEmail'); 
let inputEndereco = document.getElementById('endereco');
let inputIdade = document.getElementById('inputIdade');
let inputTelefone = document.getElementById('inputTelefone');
let info = JSON.parse(localStorage.getItem("usuario"));
let infoComp = JSON.parse(localStorage.getItem("usuarioComp"))
let token = localStorage.getItem("token");
let pos;

for(let i = 0; i < info.length; i++){
    if(info[i].email == token){
        pos = i;
    }
}
inputNome.value = info[pos].usuario;
inputEmail.value = info[pos].email;
inputEndereco.value = infoComp[pos].endereco;
inputIdade.value = infoComp[pos].idade;
inputTelefone.value = infoComp[pos].telefone;



