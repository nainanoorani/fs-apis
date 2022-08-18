document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value;
    console.log(choice)
    const url =`https://api.nasa.gov/planetary/apod?api_key=ewbXTcboOyrL1OBAqqyCXWgdHn9IT5QqyuC0cuer&date=${choice}`;

    fetch(url)
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation;
        // document.innerHTML = expl;
    })
    .catch(err=>{console.log(`error ${err}`)})
}


