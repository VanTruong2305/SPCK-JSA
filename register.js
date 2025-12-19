let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username.length < 6) {
    alert("Username phải ít nhất 6 ký tự");
    return;
  }

  if (password.length < 8) {
    alert("Password phải ít nhất 8 ký tự");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = false;
  users.forEach(user => {
    if (user.email === email) exists = true;
  });

  if (exists) {
    alert("Email đã tồn tại");
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công");
  location.href = "login.html";
});