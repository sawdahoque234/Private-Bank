function getInputValue(id) {
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}
function updateTotal(id, amount) {
    const total = document.getElementById(id);
    const previoustotal=parseFloat(total.innerText)
    const newTotal = previoustotal + amount;
    total.innerText = newTotal;

}
function balance(amount,isAdd) {
    const balancetaq = document.getElementById('balance-total');
    const previousbalance = parseFloat(balancetaq.innerText);
    if (isAdd == true) {
        
         newBlance = previousbalance + amount;
    }
    else {
         newBlance = previousbalance - amount;
        
    }
    balancetaq.innerText = newBlance;
}
document.getElementById('depositbtn').addEventListener('click', function () {
    const amount = getInputValue('deposit');
    if (amount > 0) {

        updateTotal('deposit-amount', amount)
        balance(amount, true)
    }
})
document.getElementById("Withdraw-input").addEventListener('click',function () {
    const amount = getInputValue("withdraw");
    if (amount > 0) {
        
        updateTotal('withdraw-amount', amount)
        balance(amount,false)
    }
    
})