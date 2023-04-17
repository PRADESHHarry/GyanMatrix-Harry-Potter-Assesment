function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
     
      return false;
    }
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      document.getElementById("chk").style.display="block"
      return false;
    }
    if (password == "") {
      //alert("Password field must be filled out");
      document.getElementById("chk").style.display="block"
      return false;
    }
    if(password.length < 4){
      document.getElementById("chk").style.display="block"
        alert("valid password needed");
        return false;
    }
    
    return true;
  }
