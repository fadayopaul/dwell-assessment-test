// login form

function toggleResetPswd(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-reset").toggle(); // display:block or none
}

function toggleSignUp(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle(); // display:block or none
  $("#logreg-forms .form-signup").toggle(); // display:block or none
}

$(() => {
  // Login Register Form
  $("#logreg-forms #forgot_pswd").click(toggleResetPswd);
  $("#logreg-forms #cancel_reset").click(toggleResetPswd);
  $("#logreg-forms #btn-signup").click(toggleSignUp);
  $("#logreg-forms #cancel_signup").click(toggleSignUp);
});

// Admin Dashboard
// get number of users from server
const numUsers = 100; // replace with actual value from server

// get number of available items from server
const numItems = 50; // replace with actual value from server

// update dashboard with values from server
document.getElementById("num-users").textContent = numUsers;
document.getElementById("num-items").textContent = numItems;
