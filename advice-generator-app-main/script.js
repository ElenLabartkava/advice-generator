const adviceId = document.getElementsByClassName('id') [0];
const advice = document.getElementsByClassName('advice') [0];
const circle = document.getElementsByClassName('circle') [0]



 
async  function getFetchApi() {
    let Url =  'https://api.adviceslip.com/advice'
    let response = await fetch(Url)
    let data = await response.json()
    
    adviceId.innerHTML = data.slip.id
    advice.innerHTML = data.slip.advice

}



 circle.addEventListener("click", () => {
    getFetchApi()
 })



