// get Doms elements
const search=document.getElementById('search');
const submit=document.getElementById('submit');
const submitBtn=document.getElementById('submit-btn');
const resultHeading=document.getElementById('result-heading');
const playersElement=document.getElementById('players');
const selectedPlayerElement=document.getElementById('selected-player');


//                                       Functions
function findPlayers(e){
    e.preventDefault();
   const searchText= search.value;
    //console.log(search.value);
    if(searchText){
        fetch(`/get-all-player-name-and-id`)
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
        });
    }
}



//                                        Eventlisteners

// listen click on submit
submit.addEventListener('submit', findPlayers)

