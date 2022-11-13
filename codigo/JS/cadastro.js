const usuario = [];
function Cadastrar(){
    var nome = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;

  
    if(senha.length  < 8 && (nome == "" || email == "" || senha == "")){
        alert("Sua senha deve ter pelo menos 8 caracteres! E voce deixou algo em branco!")
    }else if(nome == "" || email == "" || senha == ""){
        alert("Você deixou algo em branco!")
    }else if(senha.length < 8){
        alert("Sua senha deve ter pelo menos 8 caracteres!")

    }else if(senha != confirmaSenha){
        alert("As senhas nao condizem!")
    }
    else{
        
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
