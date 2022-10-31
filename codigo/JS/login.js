function Logar(){
    let email_login = document.getElementById('usuario').value;
    let senha_login = document.getElementById('senha').value;
    let info = JSON.parse(localStorage.getItem("info"));
    console.log(email_login, senha_login);

    if(email_login == "" || senha_login == ""){
        document.getElementById('alerta').className = "ativo";
        document.getElementById('alerta').innerText = "Você deixou algo em branco!"
    }

    if(info.senha == senha_login && info.email == email_login){
        document.getElementById('usuario').style.borderColor = "rgba(255, 255, 255, 0.3)"
        document.getElementById('senha').style.borderColor = "rgba(255, 255, 255, 0.3)"
        window.location.href = "Dashboard/startbootstrap-sb-admin-2-gh-pages/dashboard.html"
      
    }else{
        document.getElementById('usuario').style.borderColor = "red";
        document.getElementById('usuario').style.transition = "0.3s";
        document.getElementById('senha').style.borderColor = "red";
        document.getElementById('senha').style.transition = "0.3s";
        document.getElementById('alerta').className = "ativo";
    }
  
}