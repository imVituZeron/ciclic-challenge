const $inputName = document.querySelector("#name-ciclic");
const $inputMensalidade = document.querySelector("#mensalidade-ciclic");
const $inputYear = document.querySelector("#years-ciclic");
const $btnSimular = document.querySelector(".button-ciclic");
const juros = 0.517;

simuMoney = () => {
   let total = ($inputMensalidade.value * ((( 1 + juros) * $inputYear.value - 1 ) / juros));
   console.log(total);
}

$btnSimular.addEventListener("click", ()=> {
   simuMoney();
   console.log(`
      quando clicar aqui devo fazer uma logica que vai passar o estado das variaveis
      e ir para outra pagina`)

});