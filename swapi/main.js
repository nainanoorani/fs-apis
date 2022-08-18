
const residentsBtn = document.querySelector('button');
// const planetCallback = ({data: residents}) => displayResidents(residents);


function displayResidents(){
   // console.log('button clicked');
   const baseURL = 'https://swapi.dev/api/planets/?search=Alderaan';
    axios.get(baseURL)
    .then(res=>
        {
            const alderaan = res.data.results; //this is for everything in alderaan
            console.log(res.data.results[0].residents);
            let aldRes = alderaan[0].residents; //to get the first element in the array
            console.log(aldRes)
            for(let i=0; i<aldRes.length; i++){
                axios.get(aldRes[i])    //residents are in URL
                .then(res=>{
                    let resident =res.data;
                    console.log(resident);
                    let resName = resident.name;
                    console.log(resName);
                    //create p element and set content to resName
                    // const pTag = document.createElement("p");
                    // pTag.textContent
                })
            }
        }
    )
}

residentsBtn.addEventListener('click', displayResidents)

//const baseURL = ;