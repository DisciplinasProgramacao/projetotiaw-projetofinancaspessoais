const usuarioComp = [];
function cadastrarComp(){
     var endereco = document.getElementById('endereco').value;
     var idade = document.getElementById('idade').value;
     var telefone = document.getElementById('telefone').value;
    

    if(endereco == "" || idade == "" || telefone == ""){
        alert("Você deixou algo em branco!")
    }else{
        const userObjectComp = {
            'endereco':endereco, 
            'idade':idade, 
            'telefone':telefone
        }
        usuarioComp.push(userObjectComp);
        localStorage.setItem('usuarioComp', JSON.stringify(usuarioComp));
            
        window.location.href = "login.html";
    }




    
    
    


   

    
        
        
    }

    

    

    




   




