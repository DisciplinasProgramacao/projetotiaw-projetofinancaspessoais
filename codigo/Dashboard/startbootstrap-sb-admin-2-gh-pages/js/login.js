let token;

function Logar(){
    let email_login = document.getElementById('usuario').value;
    let senha_login = document.getElementById('senha').value;
    let info = JSON.parse(localStorage.getItem("usuario"));
 





    for(let i = 0; i < info.length; i++){
        if(email_login == "" || senha_login == ""){
            alert("Voce deixou algo em branco!")
        }else if(info[i].senha == senha_login && info[i].email == email_login){
            document.getElementById('usuario').style.borderColor = "rgba(255, 255, 255, 0.3)"
            document.getElementById('senha').style.borderColor = "rgba(255, 255, 255, 0.3)"
            window.location.href = "Dashboard/startbootstrap-sb-admin-2-gh-pages/dashboard.html"
            localStorage.setItem('token', email_login);
            
            
          
        }else{
            document.getElementById('usuario').style.borderColor = "red";
            document.getElementById('usuario').style.transition = "0.3s";
            document.getElementById('senha').style.borderColor = "red";
            document.getElementById('senha').style.transition = "0.3s";
            alert("Credenciais incorretas...")
            
        }

    }
   
  
}