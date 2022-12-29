
var SUPABASE_URL = 'https://eobfgehqjibbzwripnmd.supabase.co'
var SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYmZnZWhxamliYnp3cmlwbm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5NDkwNDIsImV4cCI6MTk4NTUyNTA0Mn0.w-siG2qQ0MdCkugJH_CLb_w4FwQXfMp81QXTxZJ4yQc'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

document.addEventListener('DOMContentLoaded', function (event) {

})


async function updater() {
    var d1 = 0;
    var d2=0;
    RADIOS = document.getElementsByName('Svalue');
    timer = document.getElementById('timer');

    if (timer.value < 5) {
        alert("Please Enter a timer of at least 5 seconds");
        window.location.href = './pH_control.html';
    }
    
    xtimer = await supabase.from('remote_control_data').select('timer');
    xytimer = xtimer.data.slice(-1)[0]['timer'];

    if (xytimer != 0){
        alert('remote control already running');
    }

    for (let index = 0; index < RADIOS.length; index++) {
        const element = RADIOS[index];
        if (element.checked){
            if (element.id == 'increase'){
                d1 =1
            }else if (element.id == 'decrease'){
                d1 = 2
            }else if (element.id == 'oxygen'){
                d2 = 1
            }
        }
    }

    const {error} = await supabase.from('remote_control_data')
                    .update({'PH Controller':d1,'oxygen motor':d2,'timer':timer.value})
                    .eq('id',7);

    window.location = './dashboard.html';
}   