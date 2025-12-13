let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let lower_case_letter = /[a-z]/g;
    let upper_case_letter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (username.length < 6) {
        alert("Username must be at least 6 characters");
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters");
    }
    else if (!password.match(lower_case_letter)) {
        alert("Password must contain lower case letter");
    }
    else if (!password.match(upper_case_letter)) {
        alert("Password must contain upper case letter");
    }
    else if (!password.match(numbers)) {
        alert("Password must contain a number");
    }
    else {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push({
                email,
                password,
                username
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
        else {
            localStorage.setItem("users", JSON.stringify([
                {
                    email,
                    password,
                    username
                },
            ]));
        }
        alert("User created successfully, please login")
        location.href = "../login.html";
    }
});