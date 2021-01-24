/* 
São a mesma coisa (false):
if (a == false){
if (a!= true){
if (!a) {
    faça tal coisa (se a condição for verdadeira)
} else {
    faça outra coisa (se a condição for falsa)
}
*/

let pessoaPCD = false;

if(pessoaPCD == false){
    console.log("acesse a home")
} else{
    console.log("selecione a deficiencia")
}

if(pessoaPCD != true){
    console.log("acesse a home")
 } else{
     console.log("selecione a deficiencia")
 }

 if(!pessoaPCD){
    console.log("acesse a home")
  } else {
    console.log("selecione a deficiencia")
  }

  if (pessoaPCD == true){
    console.log("selecione a deficiencia")
  } else {
    console.log("acesse a home")
  }

//

let pessoaBaixaRenda = false;

if(pessoaBaixaRenda == false){
    console.log("confirme o pagamento")
} else {
    console.log("declare sua isenção de pagamento")
}

if (pessoaBaixaRenda != true){
    console.log("confirme o pagamento")
} else{
    console.log("declare sua isenção de pagamento")
}

if(!pessoaBaixaRenda){
    console.log("confirme o pagamento")
} else{
    console.log("declare sua isenção de pagamento")
}
