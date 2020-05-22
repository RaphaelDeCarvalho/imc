function formataimc(numero){
  
    return numero.toFixed(1).replace(".",",")
  }
  
  function calculaImc(){
  peso= inputPeso.value
  altura= inputAltura.value
  imc= peso/(altura*altura)
  if(!imc){classificacao="Nulo"}
  if(imc>=30){classificacao="Obesidade"}
  if(imc<=30){classificacao="Sobrepeso"}
  if(imc<=25){classificacao="Peso adequado"}
  if(imc<=18.5){classificacao="Baixo peso"}
  resultado.innerHTML= "O seu índice de massa corporal é: <br>"+formataimc(imc)+" -  "+classificacao
  }
  
  