const $inputName = document.querySelector("#name-ciclic");
const $inputMensalidade = document.querySelector("#mensalidade-ciclic");
const $inputYear = document.querySelector("#years-ciclic");
const $btnSimular = document.querySelector(".button-ciclic");

const juros = 0.00517;
const mensal = $inputMensalidade.value;
const year = $inputYear.value * 12;

simuMoney = () => {
   
   let total = (parseFloat(mensal) * ((( 1 + juros) * year - 1 ) / juros));
   return parseFloat(total);
}

$btnSimular.addEventListener("click", ()=> {
   simuMoney();

   alert(`Olá ${$inputName.value} juntando R$${mensal}
   todo mês, você terá ${simuMoney()} em ${$inputYear.value} Anos`);

});