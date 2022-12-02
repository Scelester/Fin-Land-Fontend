
const supabaseurl = "https://eobfgehqjibbzwripnmd.supabase.co"
const supabsekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYmZnZWhxamliYnp3cmlwbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NDkwNDIsImV4cCI6MTk4NTUyNTA0Mn0.w-siG2qQ0MdCkugJH_CLb_w4FwQXfMp81QXTxZJ4yQc"
const supabase = createClient(supabaseurl, supabsekey)


const Verify_user = async () => {
    
    let { user, error } = await supabase
    .from('User_Authentication')

    alert(user)

};




let login_button = document.getElementById("loginbutton");

login_button.addEventListener("click", () => {
    Verify_user();
})
