let botaoCalcular = document.getElementById("btnCalcular");

function calculandoIMC(){
  let peso = document.getElementById("peso").value;
  let alt = document.getElementById("altura").value/100;
  let res = document.getElementById("resultado");
  
  if(peso !== "" && alt !== ""){
    let imc = (peso / (alt * alt)).toFixed(2);
    let msg = "";
    
    if(imc < 18.5){
      msg = "Abaixo do peso!";
    }else if(imc < 25){
      msg = "Você está com o peso ideal!";
    }else if(imc < 30){
      msg = "Você está levemente acima do peso";
    }else if(imc < 35){
      msg = "Cuidado! Obesidade grau I";
    }else if(imc < 40){
      msg = "Cuidado! Obesidade grau II";
    }else{
      msg = "Cuidado! Obesidade grau III";
    }
  
    resultado.textContent = `Seu IMC é ${imc}\n${msg}`;
  }else{
     resultado.textContent = `Preencha todos os campos`;
  }
}

botaoCalcular.addEventListener('click', calculandoIMC);