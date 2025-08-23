document.getElementById("btn-login").addEventListener("click", (e) => {
    e.preventDefault();

    const mobileNumber = 12345678901;
    const pinNumber = 1234;

    const mobileNumberInput = document.getElementById(
        "mobile-number-input"
    ).value;
    const numberInputValue = parseInt(mobileNumberInput);

    const pinNumberInput = document.getElementById("pin-number-input").value;
    const pinInputValue = parseInt(pinNumberInput);

    if (numberInputValue === mobileNumber && pinInputValue === pinNumber) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid Credentials");
    }
});
