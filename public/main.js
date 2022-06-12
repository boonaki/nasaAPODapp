let currentDay = document.querySelector('#currentDay')
currentDay.addEventListener('click', returnToPresent)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('#button').addEventListener('click', getFetch)

//find today and store in variable
let today = new Date();
let DD = String(today.getDate()).padStart(2, '0');
let MM = String(today.getMonth() + 1).padStart(2, '0');
let YYYY = today.getFullYear();
today = YYYY + '-' + MM + '-' + DD;

//on page load, display data for the current day
window.onload = getFetch()

function getFetch(){
    let choice = document.querySelector('input').value
    if(!choice){
        choice = today
    }
    if(choice !== today){
        currentDay.style.display = 'block'
    }
    fetch(`/pic/${choice}`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        if( data.mediatype === 'image' ){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').classList.add('hidden')

        }else if(data.mediatype === 'video'){
            document.querySelector('iframe').classList.remove('hidden')
            document.querySelector('iframe').src = data.video
        }
        document.querySelector('h3').innerText = data.explan
        document.querySelector('#title').innerText = data.title
    })
}

//displays data for present day
function returnToPresent(){
    fetch(`/pic/${today}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        currentDay.style.display = 'none'
        if( data.mediatype === 'image' ){
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').classList.add('hidden')

        }else if(data.mediatype === 'video'){
          document.querySelector('iframe').classList.remove('hidden')
          document.querySelector('iframe').src = data.video
        }
        document.querySelector('h3').innerText = data.explan
        document.querySelector('#title').innerText = data.title
        })
        .catch(err => console.error(err))
}

//displays data for a random day
function getRandom(){
  fetch('/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        currentDay.style.display = 'block'
        console.log(data)
            if(data.mediatype=== 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('iframe').classList.add('hidden') 
            }else if(data.mediatype === 'video'){
                document.querySelector('iframe').classList.remove('hidden')
                document.querySelector('iframe').src = data.video
            }
            document.querySelector('h3').innerText = data.explan
            document.querySelector('#title').innerText = data.title
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}