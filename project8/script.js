const search=document.getElementById('search');
const submit=document.getElementById('submit');
const randomBtn=document.getElementById('random-btn');
const mealsElement=document.getElementById('meals');
const selectedMealElement=document.getElementById('selected-meal');
const resultsHeading=document.getElementById('result-heading');
// Functions
function findMeals(e){
    // stop the page reload
    e.preventDefault();

    const searchText=search.value;
   console.log(searchText);
   // CHECK IF SERACH HAVE TEXT
   if(searchText.trim ){
       // trim se space bar text count nai hoga
       // if searchtext exists, then call the api
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
       .then(res =>res.json())
       .then(data =>{
           //console.log(data);

           // now display the search result headings
           resultsHeading.innerHTML =`<h2>Search Results For ${searchText}</h2>`


           // checking if data is available or not
           if(data.meals==null){
               // data.meals==> meals from log 
               resultsHeading.innerHTML=`<h2>There are no such results found for ${searchText} </h2>`


           }else{
               //loop through  results and render in dom
               //strmeal for meal name and strmeal thumb for imagae
               
               mealsElement.innerHTML=data.meals.map(meal=>`
               <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>            
               </div>
               </div>
               `)
               .join('')
               
           };
           // clear search text after search
           search.value='';
       })



   }else{
       // if search text doesnot exist, pop up alert message
       alert('Please provide Text for search');
   }
};
// function to get the full details of mealId
function getFullDetails(mealID){
    // fetch api to get details
    fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res =>res.json())
    .then(data=>{
        
        //save the meal data
        const meal=data.meals[0];
        console.log(meal);
        // add meal to dom
        renderMeal(meal);
    })
    

};
// function to render the selected meal
function renderMeal(meal){
    // hide the search result heading
    resultsHeading.innerHTML='';
    //hide the result search
    mealsElement.innerHTML='';

    // initialize array for ingredians
    const ingredients=[];
    // loop overe the 20 ingredina
    for(let i=1;i<=20;i++){
        // strIngredients comes from log
        if(meal[`strIngredient${i}`]){
            //push the ingredient and measurement to ingredient array

            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)   
             }else{
            //if ingre doesnt exist , exit

            break;

        };
        // Add the data to dom

        selectedMealElement.innerHTML=`
        <div class="selected-meal-detail">
        <h1>${meal.strMeal}<?h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  />
           <div class class="selected-meal-info">
           ${meal.strCategory ?`<p>${meal.strCategory}</p`:''}
           ${meal.strArea ?`<p>${meal.strArea}</p`:''}


           </div>
           <div class ="selected-meal-instructions"></div>
           <h2>Instructions</h2>
           <p>${meal.strInstructions}</p>

           <h2>Ingredients</h2>
           <ul>
           ${ingredients.map(ingredients=>`<li>${ingredients}</li>`).join('')}
           </ul>

             
        </div>
        `

        

    }

}



//Event listners
//1 listen for click on submit button
submit.addEventListener('submit', findMeals);
//2 listen for click on the image
mealsElement.addEventListener('click',e=>{
   const mealInfo= e.path.find(item=>{
       // get only the element with class having meal info check from log
       if(item.classList){
           return item.classList.contains('meal-info')

       }else{ return false;}

   });
   //check if meal info haas a valid data
   if(mealInfo){
       // get the value from data-mealID attribute
       const mealID=mealInfo.getAttribute('data-mealID');
       // use the mealId to get full details of meal
       getFullDetails(mealID);
       
   }
})
    




