var defaultemail = "demo@sankeysolutions.com";
var defaultpassword = "demo@123";

function onLogin() {

    var ema = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if ((ema == defaultemail) && (pass == defaultpassword)) {
        /*The window.location object can be used to get the current page address (URL) 
        and to redirect the browser to a new page. */
        window.location.href = "http://127.0.0.1:5500/HTML_CSS/index1.htm";

    }
    else {
        if (!(ema == defaultemail)) {
            document.getElementById("error1").style.display = "block";
        }
        else {
            document.getElementById("error1").style.display = "none";
        }
        if (!(pass == defaultpassword)) {
            document.getElementById("error2").style.display = "block";
        }
        else {
            document.getElementById("error2").style.display = "none";
        }


    }

}