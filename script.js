

function getYear(){
    fetch('https://whatyearisit-backend-two-henna.vercel.app/')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#year").innerHTML += data.year
    })
}


getYear()


