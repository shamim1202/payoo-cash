/* ----------------> All Declarable Variable For Use <--------------- */
const pin = 1234;
const transactionsData = [];

/* ----------------> *** All Menu Even Listener Functions *** <---------------- */

document.getElementById("add-money-menu").addEventListener("click", () => {
    menuToggle("add-money-container");
    btnMenuToggle("add-money-menu");
});

document.getElementById("cash-out-menu").addEventListener("click", () => {
    menuToggle("cash-out-container");
    btnMenuToggle("cash-out-menu");
});

document.getElementById("money-transfer-menu").addEventListener("click", () => {
    menuToggle("money-transfer-container");
    btnMenuToggle("money-transfer-menu");
});

document.getElementById("get-bonus-menu").addEventListener("click", () => {
    menuToggle("get-bonus-container");
    btnMenuToggle("get-bonus-menu");
});

document.getElementById("pay-bill-menu").addEventListener("click", () => {
    menuToggle("pay-bill-container");
    btnMenuToggle("pay-bill-menu");
});

document.getElementById("transactions-menu").addEventListener("click", () => {
    menuToggle("transaction-container");
    btnMenuToggle("transactions-menu");
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

// Handle change menu style by toggle ------>
function btnMenuToggle(id) {
    const btnMenu = document.getElementsByClassName("btn-menu");
    for (const menu of btnMenu) {
        menu.classList.remove("border", "border-blue-500", "bg-blue-50");
        menu.classList.add("border", "border-gray-200");
    }
    document.getElementById(id).classList.remove("border", "border-gray-200");
    document
        .getElementById(id)
        .classList.add("border", "border-blue-500", "bg-blue-50");
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

// -------------> *** Add Money Event Handler Function *** <--------------

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
    if (addMoney < 100 || addMoney > 20000) {
        return alert("Add Valid Amount Between 100 to 20000");
    }
    if (bankPin !== pin) {
        return alert("Invalid Bank Account Pin");
    } else {
        const netBalance = availableBalance + addMoney;
        setInnerText(netBalance);
        alert(`${addMoney} Add Money Successfully Done.`);
        document.getElementById("add-money-form").reset();
    }

    const data = {
        icon: "./assets/wallet1.png",
        name: "Add Money",
        date: new Date().toLocaleString(),
    };
    transactionsData.push(data);
});

// -------------> *** Cash Out Event Handler Function *** <--------------
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
        return alert("Add Valid Amount Between 100 to 30000");
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

    const data = {
        icon: "./assets/send1.png",
        name: "Cash Out",
        date: new Date().toLocaleString(),
    };
    transactionsData.push(data);
});

// ------------> *** Transactions Event Handler Function *** <--------------
document.getElementById("transactions-menu").addEventListener("click", (e) => {
    const transactionList = document.getElementById("transaction-list");
    transactionList.innerHTML = "";

    for (const data of transactionsData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-white p-3 rounded-2xl flex items-center justify-between">
            <div class="flex items-center gap-5">
                <div class="p-2 bg-gray-200 rounded-full">
                    <img
                        src="${data.icon}"
                        alt=""
                        srcset=""
                    />
                </div>
                <div>
                    <h5 class="text-base font-bold text-gray-600">${data.name}</h5>
                    <span class="text-xs text-gray-500">${data.date}</span>
                </div>
            </div>
            <a href=""><i class="fa-solid fa-ellipsis-vertical"></i></a>
        </div>`;
        transactionList.appendChild(div);
    }
});
