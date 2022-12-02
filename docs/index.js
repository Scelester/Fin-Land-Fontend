require('dotenv').config()

const Verify_user = () => {
    const supabaseurl = process.env.SUPABASEURL
    const supabsekey = process.env.SUPABASEKEY
};



let login_button = document.getElementById("loginbutton");

login_button.addEventListener("click",alert("ok"));

