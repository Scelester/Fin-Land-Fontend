
var SUPABASE_URL = 'https://eobfgehqjibbzwripnmd.supabase.co'
var SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYmZnZWhxamliYnp3cmlwbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NDkwNDIsImV4cCI6MTk4NTUyNTA0Mn0.w-siG2qQ0MdCkugJH_CLb_w4FwQXfMp81QXTxZJ4yQc'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)


document.addEventListener('DOMContentLoaded', async function (event) {
    const phdata = await supabase.from('PH-data').select("PH-Value");
    last_ph_data = phdata.data.slice(-1)[0]['PH-Value'];
    document.querySelector('#lastph_val').innerHTML = last_ph_data;
    
    document.querySelector('#ffusername').innerHTML = localStorage.getItem('username');

    const tempdata = await supabase.from('TEMP-data').select('TEMP-Value');
    last_temp_data = tempdata.data.slice(-1)[0]['TEMP-Value'];
    document.querySelector('#lasttemp_val').innerHTML = last_temp_data;

})





