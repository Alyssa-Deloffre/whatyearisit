

function getYear(){
    fetch('https://whatyearisit-backend-snowy-seven.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#year").innerHTML += data.year
    })
}


getYear()


