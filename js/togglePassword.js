//--------------------------------------------------------------toggle password-----------------------------------------------------------------//
function togglePassword() {
    const passwordField = document.getElementById("password");
    const fieldType = passwordField.type;
    passwordField.type = fieldType === "password" ? "text" : "password";
  }

  function toggleCpassword() {
    const cpasswordField = document.getElementById("cpassword");
    const fieldType = cpasswordField.type;
    cpasswordField.type = fieldType === "password" ? "text" : "password";
  }



//--------------------------------------------------------------For view Modal-----------------------------------------------------------------//

function toggleviewPassword() {
    const viewpasswordField = document.getElementById("viewPassword");
    const fieldType = viewpasswordField.type;
    viewpasswordField.type = fieldType === "password" ? "text" : "password";
  }

  function toggleviewCpassword() {
    const viewcpasswordField = document.getElementById("viewCPassword");
    const fieldType = viewcpasswordField.type;
    viewcpasswordField.type = fieldType === "password" ? "text" : "password";
  }