let BillAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let TipAmount = document.getElementById("tipAmount");
let TotalAmount = document.getElementById("totalAmount");
let errormessageElement = document.getElementById("errorMessage");
let errormeassage = "please Enter Valid Input";

function calculateButton() {
    if (BillAmount.value === "") {
        errormessageElement.textContent = errormeassage;
    } else if (percentageTip.value === "") {
        errormessageElement.textContent = errormeassage;
    } else {
        let BillAmountelement = parseInt(Math.ceil(BillAmount.value));
        let percentageTipelement = parseInt(Math.ceil(percentageTip.value));
        let calculatedtip = (percentageTipelement / 100) * BillAmountelement;
        let calculateAmount = BillAmountelement + calculatedtip;
        TipAmount.value = calculatedtip;
        TotalAmount.value = calculateAmount;
        errormessageElement.textContent = "";
    }
}

function refreshButton() {
    BillAmount.value = 0;
    percentageTip.value = 0;
    TipAmount.value = 0;
    TotalAmount.value = 0;
}