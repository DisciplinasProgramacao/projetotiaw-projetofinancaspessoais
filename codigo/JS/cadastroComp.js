const usuarioComp = [];
function cadastrarComp(){
     var endereco = document.getElementById('endereco').value;
     var idade = document.getElementById('idade').value;
     var quest = document.getElementById('quest').value;
    

    if(endereco == "" || idade == "" || quest == ""){
        alert("Você deixou algo em branco!")
    }else{
        const userObjectComp = {
            'endereco':endereco, 
            'idade':idade, 
            'quest':quest
        }
        usuarioComp.push(userObjectComp);
        localStorage.setItem('usuarioComp', JSON.stringify(usuarioComp));
            
        window.location.href = "login.html";
    }




    
    
    


   

    
        
        
    }

    

    

    




   




