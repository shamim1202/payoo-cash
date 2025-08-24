// ----------------> *** All Menu Even Listener Functions *** <----------------

document.getElementById("add-money-menu").addEventListener("click", () => {
    menuToggle("add-money-container");
});

document.getElementById("cash-out-menu").addEventListener("click", () => {
    menuToggle("cash-out-container");
});

document.getElementById("money-transfer-menu").addEventListener("click", () => {
    menuToggle("money-transfer-container");
});

document.getElementById("get-bonus-menu").addEventListener("click", () => {
    menuToggle("get-bonus-container");
});

document.getElementById("pay-bill-menu").addEventListener("click", () => {
    menuToggle("pay-bill-container");
});

document.getElementById("transactions-menu").addEventListener("click", () => {
    menuToggle("transaction-container");
});

/* ---------> *** Reuseable function for get forms input values *** <---------- */

// Handle menu toggle ------>
function menuToggle(id) {
    const forms = document.getElementsByClassName("form-container");
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// To get input values converted in number --->
function getInputNumber(id) {
    const inputValueNumber = parseInt(document.getElementById(id).value);
    return inputValueNumber;
}
// To get input values --->
function getInput(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
// To get inner text values --->
function getInnerText(id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}
// To set inner text values --->
function setInnerText(value) {
    const innerTextValue = (document.getElementById(
        "available-balance"
    ).innerText = value);
    return innerTextValue;
}

const pin = 1234;

// -------------------> *** Add Money Function *** <-----------------------

document.getElementById("btn-add-money").addEventListener("click", (e) => {
    e.preventDefault();

    const bankName = getInput("selected-bank");
    const bankAccount = getInput("bank-ac-input");
    const addMoney = getInputNumber("add-amount-input");
    const bankPin = getInputNumber("bank-pin-input");
    const availableBalance = getInnerText("available-balance");
    console.log(bankName, bankAccount, addMoney, bankPin, availableBalance);

    if (bankName === "") {
        return alert("A Bank Account Required!!!");
    }
    if (bankAccount.length !== 9) {
        return alert("Invalid Account Number");
    }
    if (isNaN(addMoney)) {
        return alert("Please Enter Your Desire Amount");
    }
    if (addMoney < 100 || addMoney > 50000) {
        return alert("Add Valid Amount Between 100 to 50000");
    }
    if (bankPin !== pin) {
        return alert("Invalid Bank Account Pin");
    } else {
        const netBalance = availableBalance + addMoney;
        setInnerText(netBalance);
        alert(`${addMoney} Add Money Successfully Done.`);
        document.getElementById("add-money-form").reset();
    }
});

// -------------------> *** Cash Out Function *** <-----------------------
document.getElementById("btn-cash-out").addEventListener("click", (e) => {
    e.preventDefault();

    const agentAccount = getInput("agent-ac-input");
    const cashOutAmount = getInputNumber("cash-out-amount-input");
    const cashOutPin = getInputNumber("cash-out-pin-input");
    const availableBalance = getInnerText("available-balance");

    console.log(agentAccount, cashOutAmount, cashOutPin, availableBalance);
    if (agentAccount.length !== 11) {
        return alert("Invalid Agent Account Number");
    }
    if (isNaN(cashOutAmount)) {
        return alert("Please Enter Your Desire Amount");
    }
    if (cashOutAmount > availableBalance) {
        return alert("Don't Have Sufficient Balance");
    }
    if (cashOutAmount < 100 || cashOutAmount > 50000) {
        return alert("Add Valid Amount Between 100 to 50000");
    }
    if (isNaN(cashOutPin)) {
        return alert("Please Enter Pin Number");
    }
    if (cashOutPin !== pin) {
        return alert("Incorrect Pin Number");
    } else {
        const netBalance = availableBalance - cashOutAmount;
        setInnerText(netBalance);
        alert(`${cashOutAmount} Withdraw Successfully Done.`);
        document.getElementById("cash-out-form").reset();
    }
});
