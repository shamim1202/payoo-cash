document.getElementById("btn-add-money").addEventListener("click", (e) => {
    e.preventDefault();

    const bankName = document.getElementById("selected-bank").value;
    const bankAccount = document.getElementById("bank-ac-input").value;
    const addMoney = parseInt(
        document.getElementById("add-amount-input").value
    );
    const bankPin = document.getElementById("bank-pin-input").value;
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );

    const netBalance = availableBalance + addMoney;

    document.getElementById("available-balance").innerText = netBalance;
});
