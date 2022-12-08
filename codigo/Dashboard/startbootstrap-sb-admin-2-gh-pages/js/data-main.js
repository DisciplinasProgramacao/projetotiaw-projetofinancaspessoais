let info2 = JSON.parse(localStorage.getItem("usuario"));
let token2 = localStorage.getItem("token");
let nomeProfile = document.getElementById('nomeProfile')
let pos2;


for(let i = 0; i < info2.length; i++){
    if(info2[i].email == token2){
        pos2 = i;
    }
}

nomeProfile.innerText = info2[pos2].usuario;