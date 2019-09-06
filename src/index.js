const $inputName = document.querySelector("#name-ciclic");
const $inputMensalidade = document.querySelector("#mensalidade-ciclic");
const $inputYear = document.querySelector("#year-ciclic");
const $btnSimular = document.querySelector(".button-ciclic");

console.log('button = ', $btnSimular);
console.log('name = ', $inputName);
console.log('mensalidade =',$inputMensalidade);

// falta coisa pra arrumar essa logica de lucro;
simuMoney = () => {
   let total = ($inputMensalidade.value * ((( 1 + 0.517) * 24 - 1 ) / 0.517));
   console.log(total);
}




$btnSimular.addEventListener("click", ()=> {
   simuMoney();
   console.log(`
      quando clicar aqui devo fazer uma logica que vai passar o estado das variaveis
      e ir para outra pagina`)

});