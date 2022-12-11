
var SUPABASE_URL = 'https://eobfgehqjibbzwripnmd.supabase.co'
var SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYmZnZWhxamliYnp3cmlwbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NDkwNDIsImV4cCI6MTk4NTUyNTA0Mn0.w-siG2qQ0MdCkugJH_CLb_w4FwQXfMp81QXTxZJ4yQc'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {

  var logInbutton = document.querySelector('#loginbutton')
  logInbutton.addEventListener('click', () => {logInSubmitted()})

})

const logInSubmitted = (event) => {

  const email = document.getElementById("username").value
  const password = document.getElementById("password").value

  supabase.auth
    .signIn({ email, password })    
    .then((response) => {
      response.error ? alert(response.error.message) : setToken(response)
    })
    .catch((err) => {
      alert(err.response.text)
    })
    
}
async function xxx(){
const { data: user, error } = await supabase.auth.api.createUser({

    email: 'user',
  
    password: 'password',
  
  })

}