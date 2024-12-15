const calculatorBtn = document.querySelector("#calculateBtn");

function calculteTip(){
 const billAmount = parseFloat(document.querySelector("#billAmount").value);
 const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

 if(billAmount === ""){
    alert("Por favor, preencha os dados");
    return;
 }

 const tipAmount = billAmount * serviceQuality;
 const totalAmount = billAmount + tipAmount;


 const tipAmountInput = document.querySelector("#tipAmount");
 const totalAmountInput =document.querySelector("#totalAmount");

 tipAmountInput.value = `€ ${tipAmount}`;
 totalAmountInput.value = `€ ${totalAmount}`;

}

calculatorBtn.addEventListener("click", calculteTip);