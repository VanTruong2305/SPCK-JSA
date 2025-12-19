let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let found = false;

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            found = true;
        }
    });

    if (found) {
        location.href = "index.html";
    } else {
        alert("Sai email hoặc mật khẩu");
    }
});