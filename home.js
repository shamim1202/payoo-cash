// ----------------> *** Toggle All Menu Functions *** <----------------
// Add Money Event Listener ------>
document.getElementById("add-money-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "block";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("latest-payment-container").style.display = "none";
});

// Cash Out Event Listener ------>
document.getElementById("cash-out-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "block";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("latest-payment-container").style.display = "none";
});

// Money Transfer Event Listener ------>
document.getElementById("money-transfer-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "block";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("latest-payment-container").style.display = "none";
});

// Get Bonus Event Listener ------>
document.getElementById("get-bonus-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "block";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("latest-payment-container").style.display = "none";
});

// Pay Bill Event Listener ------>
document.getElementById("pay-bill-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "block";
    document.getElementById("transaction-container").style.display = "none";
    document.getElementById("latest-payment-container").style.display = "none";
});

// All Transactions Event Listener ----->
document.getElementById("transactions-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "block";
    document.getElementById("latest-payment-container").style.display = "none";
});

const pin = 1234;

// -------------------> *** Add Money Function *** <-----------------------
document.getElementById("btn-add-money").addEventListener("click", (e) => {
    e.preventDefault();

    const bankName = document.getElementById("selected-bank").value;
    const bankAccount = document.getElementById("bank-ac-input").value;
    const addMoney = parseInt(
        document.getElementById("add-amount-input").value
    );
    const bankPin = parseInt(document.getElementById("bank-pin-input").value);
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );

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
        document.getElementById("available-balance").innerText = netBalance;
        alert(`${addMoney} Add Money Successfully Done.`);
        document.getElementById("add-money-form").reset();
    }
});

// -------------------> *** Cash Out Function *** <-----------------------
document.getElementById("btn-cash-out").addEventListener("click", (e) => {
    e.preventDefault();

    const agentAccount = document.getElementById("agent-ac-input").value;
    const cashOutAmount = parseInt(
        document.getElementById("cash-out-amount-input").value
    );
    const cashOutPin = parseInt(
        document.getElementById("cash-out-pin-input").value
    );
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );

    if (agentAccount.length !== 11) {
        return alert("Invalid Agent Account Number");
    }
    if (isNaN(cashOutAmount)) {
        return alert("Please Enter Your Desire Amount");
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
        document.getElementById("available-balance").innerText = netBalance;
        alert(`${cashOutAmount} Withdraw Successfully Done.`);
        document.getElementById("cash-out-form").reset();
    }
});
