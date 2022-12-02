require('dotenv').config()


const Verify_user = () => {
    const supabaseurl = process.env.SUPABASEURL
    const supabsekey = process.env.SUPABASEKEY

    console.log(supabaseurl)
    console.log("test")
};



var login_button = document.getElementById("loginbutton");

login_button.addEventListener("click",Verify_user);

