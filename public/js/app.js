console.log("Client side javascript is loaded!!")


/*
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})  
*/

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6a9d9caebc853460fc004e3f7746b463

function getWeather(location) {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent  = '';
    fetch('/weather?address='+(location) ).then((response)=>{
        console.log(response)
    if(response.error) {
        messageOne.textContent = response.error;
    } else {
        response.json().then((data)=>{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    }
   
}).catch((e)=>{
    console.log(e)
})

}


const weather = document.querySelector('form'); 
const search = document.querySelector('input'); 
const messageOne =  document.querySelector('#successMessage');
messageOne.textContent = '';
const messageTwo =  document.querySelector('#errorMessage'); 

weather.addEventListener('submit',(e) =>{
   
    e.preventDefault();
    console.log('click')
    const location = search.value;
    console.log(location)
    getWeather(location);

})