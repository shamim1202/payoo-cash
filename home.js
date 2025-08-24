const pin = 1234;

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
