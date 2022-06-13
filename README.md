# NASA APOD App
This fullstack web application pulls data provided by NASA and displays the data based on either a random date or a user-specified date.

**Link to project:** https://nasaapodapp.herokuapp.com/

<!-- ![alt tag](http://placecorgi.com/1200/650) -->

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express 

The app gives the ability to choose a date, and display the corresponding NASA Astronomy Picture of the Day, along with a title and written explanation of the photo. The server is where the API calls are made and the relevant data is then sent to the front-end. The main JS file is set up to read and display the data that is being sent by the server, into the DOM.

## Optimizations

Within the backend, I have filtered the data being received by the NASA API to only send what is neccessary to the front-end.

## Lessons Learned:

After building the completed app, I had realized that my API key was exposed and decided I needed to hide my key. Upon further research, I discovered that I would need to build a backend to the project in order to hide the key. The frontend javascript file was rewritten to be able to listen and receive data from the newly created backend. Although the project could have been entirely front-end, building the backend further improved my understanding of enviroment variables and how the front-end communicates with the back-end.

## Examples:
Take a look at these other fullstack web applications in my portfolio:

**Star-Wars Quotes:** https://github.com/boonaki/starwars-crud

**Rock Paper Scissors:** https://github.com/boonaki/rockpaperscissor
