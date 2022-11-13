const usuario = [];
function Cadastrar(){
    var nome = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

  
    if(senha.length  < 8 && (nome == "" || email == "" || senha == "")){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Sua senha deve ter pelo menos 8 caracteres! E voce deixou algo em branco!"
    }else if(nome == "" || email == "" || senha == ""){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Você deixou algo em branco!"
    }else if(senha.length < 8){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Sua senha deve ter pelo menos 8 caracteres!"

    }else{
        
        const userObject = {
            'usuario':nome, 
            'email':email, 
            'senha':senha
        }
        usuario.push(userObject);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        console.log(usuario);
        window.location.href = "Cadastro2.html";
        
        
        
    }



    

    




   



}
