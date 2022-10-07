function Cadastrar(){
    var nome = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var submit = document.getElementsByName('submit');
    const usuario = {'usuario':nome, 'email':email, 'senha':senha};
    localStorage.setItem('info', JSON.stringify(usuario));


    if(senha.length  < 8 && (nome == "" || email == "" || senha == "")){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Você deixou algo em branco!"

    }else if(nome == "" || email == "" || senha == ""){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Sua senha deve ter pelo menos 8 caracteres! E voce deixou algo em branco!"
    }else if(senha.length < 8){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Sua senha deve ter pelo menos 8 caracteres!"
    }

    

    




   


}

