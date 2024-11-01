

function getYear(){
    fetch('whatyearisit-backend-two-henna.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#year").innerHTML += data.year
    })
}


getYear()


