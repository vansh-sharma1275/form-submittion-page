// ================= REGISTER =================
let regform = document.getElementById("registerForm");

if (regform) {
  regform.addEventListener("submit", function(event) {
    event.preventDefault();

    let name1 = document.getElementById("name").value;
    let email1 = document.getElementById("email").value;
    let password1 = document.getElementById("pass").value;

    localStorage.setItem("name1", name1);
    localStorage.setItem("email1", email1);
    localStorage.setItem("password1", password1);

    alert("Registration Successful");

    window.location.href = "login.html";
  });
}


// ================= LOGIN =================
let loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let loginEmail = document.getElementById("loginemail").value;
    let loginPassword = document.getElementById("loginpass").value;

    let savedEmail = localStorage.getItem("email1");
    let savedPassword = localStorage.getItem("password1");

    if (loginEmail === savedEmail && loginPassword === savedPassword) {

      alert("Login Successful");
      window.location.href = "dashboard.html";

    } else {
      alert("Wrong Email or Password");
    }

  });
}




// ================= DASHBOARD =================

let name = localStorage.getItem("name1");
let email = localStorage.getItem("email1");

let resultDiv = document.getElementById("result");

if (resultDiv) {
  resultDiv.innerHTML = `
    <div class="alert alert-success">
      <h4>Welcome ${name}</h4>
      <p>Email: ${email}</p>
    </div>
  `;
}


// ================= PRINT =================
function printData() {
  window.print();
}


// ================= LOGOUT =================
function logout() {
  alert("Logout Successful");
  window.location.href = "login.html";
}