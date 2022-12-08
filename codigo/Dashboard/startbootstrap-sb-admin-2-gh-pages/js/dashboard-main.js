let inputNome = document.getElementById('nomeUsuario');
let inputEmail = document.getElementById('inputEmail'); 
let info = JSON.parse(localStorage.getItem("usuario"));
let token = localStorage.getItem("token");
let pos;

for(let i = 0; i < info.length; i++){
    if(info[i].email == token){
        pos = i;
    }
}
inputNome.value = info[pos].usuario;
inputEmail.value = info[pos].email;
