
var SUPABASE_URL = 'https://eobfgehqjibbzwripnmd.supabase.co'
var SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYmZnZWhxamliYnp3cmlwbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NDkwNDIsImV4cCI6MTk4NTUyNTA0Mn0.w-siG2qQ0MdCkugJH_CLb_w4FwQXfMp81QXTxZJ4yQc'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {

  var logInbutton = document.querySelector('#loginbutton')
  logInbutton.addEventListener('click', () => {logInSubmitted()})

})
  
const logInSubmitted = async () => {

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  const { usernamex} = await supabase.from("User_Authentication").select("username")
  const {passwordx} = await supabase.from("User_Authentication").select("Password")

  console.log(usernamex);
}
