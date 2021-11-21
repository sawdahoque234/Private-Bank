function getinputvalue(inputid) {  
    const input = document.getElementById(inputid);
    const amountvalue =parseFloat(input.value);
    input.value = '';
    return amountvalue;  
}


function getTotalField(totalField,amount) {
    const totalAmount = document.getElementById(totalField);
    const totalPreviousAmount = parseFloat(totalAmount.innerText);
    totalAmount.innerText = parseFloat(totalPreviousAmount) + parseFloat(amount);
}
function currentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const previoustotalbalance = parseFloat(totalBalance.innerText);
    return previoustotalbalance;
    
}
function updateBalance(amount, isAdd) {
    
    const totalBalance = document.getElementById('balance-total');
    const previoustotalbalance = currentBalance();
    
    // const previoustotalbalance = parseFloat(totalBalance.innerText);
    if (isAdd == true) {
      totalBalance.innerText =parseFloat(previoustotalbalance + amount); 
        
    }
    else {
      totalBalance.innerText =parseFloat(previoustotalbalance - amount); 
        
    }
    
}
document.getElementById("depositbtn").addEventListener('click', function () {
    const inputdeposit = getinputvalue('deposit');
    if (inputdeposit > 0) {
        getTotalField('deposit-amount', inputdeposit);
        updateBalance(inputdeposit,true); 
    }
    
    
})

document.getElementById("Withdrawbtn").addEventListener('click', function () {
    const inputwithdraw = getinputvalue('Withdraw');
    const Balance = currentBalance();
    if (inputwithdraw > 0 && Balance> inputwithdraw  ) {
        getTotalField('withdraw-amount', inputwithdraw);
        updateBalance(inputwithdraw,false);
        
    }

})