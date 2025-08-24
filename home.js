document.getElementById("add-money-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "block";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
});

document.getElementById("cash-out-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "block";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
});

document.getElementById("money-transfer-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "block";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
});

document.getElementById("get-bonus-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "block";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "none";
});

document.getElementById("pay-bill-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "block";
    document.getElementById("transaction-container").style.display = "none";
});

document.getElementById("transactions-menu").addEventListener("click", () => {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "none";
    document.getElementById("money-transfer-container").style.display = "none";
    document.getElementById("get-bonus-container").style.display = "none";
    document.getElementById("pay-bill-container").style.display = "none";
    document.getElementById("transaction-container").style.display = "block";
});

const pin = 1234;

// Add Money Function --------------------->
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
    console.log(typeof addMoney === typeof availableBalance);

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

// Cash Out Function ----------------------->
