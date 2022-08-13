let currentDay = document.querySelector('#currentDay')
currentDay.addEventListener('click', returnToPresent)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('#shuffle').addEventListener('click', getRandom)
document.querySelector('#button').addEventListener('click', getFetch)

//stores html tags in variables
let image = document.querySelector('img')
let video = document.querySelector('iframe')
let explanation = document.querySelector('#explain')
let title = document.querySelector('#title')
let date = document.querySelector('#date')
let body = document.querySelector('body')
let navDate = document.querySelector('#navDate')

//find today and store in variable
let today = new Date();
let DD = String(today.getDate()).padStart(2, '0');
let MM = String(today.getMonth() + 1).padStart(2, '0');
let YYYY = today.getFullYear();
today = YYYY + '-' + MM + '-' + DD;

//on page load, display data for the current day
window.onload = getFetch()

//displays data for the current day
function getFetch(){
    let choice = document.querySelector('input').value
    if(!choice){
        choice = today
    }
    if(choice !== today){
        currentDay.classList.remove('visibility')
    }
    fetch(`/pic/${choice}`)
        .then(res => res.json())
        .then(data => {
            updateHTML(data)
        })
        .catch(err => console.error(err))
}

//displays data for present day
function returnToPresent(){
    fetch(`/pic/${today}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            currentDay.classList.add('visibility')
            updateHTML(data)
        })
        .catch(err => console.error(err))
}

//displays data for a random day
function getRandom(){
    fetch('/random')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            currentDay.classList.remove('visibility')
            updateHTML(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function updateHTML(data){
    if(data.mediatype=== 'image'){
        image.classList.remove('hidden')
        image.src = data.hdurl
        video.classList.add('hidden') 
    }else if(data.mediatype === 'video'){
        image.classList.add('hidden')
        video.classList.remove('hidden')
        video.src = data.video
    }
    explanation.innerText = data.explain
    title.innerText = data.title
    date.innerText = data.date
    navDate.innerText = data.date
}

let collapse = document.querySelector('#collapse')
let expand = document.querySelector('#expand')
let left = document.querySelector('#leftContainer')
let collapseNav = document.querySelector('#collapseNav')

collapse.addEventListener('click', _ => {
    left.classList.toggle('active')
    collapseNav.classList.toggle('active')
    body.classList.add('bodyHeight')
})

expand.addEventListener('click', _ => {
    left.classList.remove('active')
    collapseNav.classList.remove('active')
    body.classList.remove('bodyHeight')
})