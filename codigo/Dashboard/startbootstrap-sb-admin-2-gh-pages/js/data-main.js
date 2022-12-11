let info2 = JSON.parse(localStorage.getItem("usuario"));
let token2 = localStorage.getItem("token");
let nomeProfile = document.getElementById('nomeProfile')
let inputEntrada = document.getElementById('inputEntrada');
let mostraEntrada = document.getElementById('mostraEntrada');
let inputSaida = document.getElementById('inputSaida');
let mostraSaida = document.getElementById('mostraSaida');
let mostraTransacoes = document.getElementById('mostraTransacoes');

let pos2;
let total = JSON.parse(localStorage.getItem('entradas')) + JSON.parse(localStorage.getItem('Saida'));
let mostraTotal = document.getElementById('mostraTotal');
mostraTotal.innerText  = "R$" + total + ",00"
mostraEntrada.innerText = "R$" + JSON.parse(localStorage.getItem("entradas")) + ",00";
mostraSaida.innerText = "R$" + JSON.parse(localStorage.getItem("Saida")) + ",00";
mostraTransacoes.innerText = JSON.parse(localStorage.getItem('transacoes'));






var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ "Entradas", "Saidas"],
        datasets: [{
        data: [JSON.parse(localStorage.getItem('entradas')), JSON.parse(localStorage.getItem('Saida'))],
        backgroundColor: [ '#198754', '#DC3545'],
        hoverBackgroundColor: [ '#198754', '#DC3545'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        },
        legend: {
        display: false
        },
        cutoutPercentage: 80,
    },
    });



for(let i = 0; i < info2.length; i++){
    if(info2[i].email == token2){
        pos2 = i;   
    }
}

function atualizaValoresEntrada(){
    let entradas = parseInt( inputEntrada.value) + JSON.parse(localStorage.getItem('entradas'));
    let total = JSON.parse(localStorage.getItem('total')) + parseInt( inputEntrada.value);
    localStorage.setItem('total', total);
    localStorage.setItem('entradas', entradas);
    mostraEntrada.innerText = "R$ " + entradas + ",00";
    let cont = JSON.parse(localStorage.getItem('transacoes'));
    cont++;
    localStorage.setItem('transacoes', cont);
    location.reload()
    
} 

function atualizaValoresSaidas(){
    let saidas = parseInt( inputSaida.value) + JSON.parse(localStorage.getItem('Saida'));
    let total = JSON.parse(localStorage.getItem('total')) + parseInt( inputSaida.value);
    localStorage.setItem('total', total);
    localStorage.setItem('Saida', saidas);
    mostraSaida.innerText = "R$ " + saidas + ",00";
    let cont = JSON.parse(localStorage.getItem('transacoes'));
    cont++;
    localStorage.setItem('transacoes', cont);
    
    location.reload()

    
} 



nomeProfile.innerText = info2[pos2].usuario;

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


//General Code
function atualizarGrafico(){
  let entradas = JSON.parse(localStorage.getItem("entradas"));
  let saidas = JSON.parse(localStorage.getItem("Saida"));
  let somaEntradaESaidas= entradas + saidas;
  let percentualEntrada = (100 * entradas) / somaEntradaESaidas;
  let percentualSaida = (100 * saidas) / somaEntradaESaidas;
  localStorage.setItem('percentualEntrada', percentualEntrada);
  localStorage.setItem('percentualSaida', percentualSaida);



 

}
function executaBotheSaida(){
    atualizarGrafico();
    atualizaValoresSaidas()
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ "Entradas", "Saidas"],
        datasets: [{
        data: [JSON.parse(localStorage.getItem('entradas')), JSON.parse(localStorage.getItem('Saida'))],
        backgroundColor: [ '#1cc88a', '#DC3545'],
        hoverBackgroundColor: [ '#17a673', '#DC3545'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        },
        legend: {
        display: false
        },
        cutoutPercentage: 80,
    },
    });


}
function executaBotheEntrada(){
    atualizarGrafico();
    atualizaValoresEntrada()
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ "Entradas", "Saidas"],
        datasets: [{
        data: [JSON.parse(localStorage.getItem('entradas')), JSON.parse(localStorage.getItem('Saida'))],
        backgroundColor: [ '#198754', '#DC3545'],
        hoverBackgroundColor: [ '#198754', '#DC3545'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        },
        legend: {
        display: false
        },
        cutoutPercentage: 80,
    },
    });


}

function limparDados(){
    localStorage.setItem('entradas', 0);
    localStorage.setItem('Saida', 0);
    localStorage.setItem('total', 0);
    localStorage.setItem('transacoes', 0)
    location.reload()
    
    
}


