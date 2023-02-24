//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
const cardContainer = document.getElementById("card-container");
const searchField = document.getElementById("search-field");
const searchBtn = document.getElementById('search-btn')
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=t`;



const loadData = async () => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      dispalyData(jsonData)
    } catch (error) {
      console.log(error);
    }
  };
  loadData();
 


searchBtn.addEventListener('click', function(){
    const value = searchField.value;
    cardContainer.innerHTML = '';
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    loadData();
})

function dispalyData(datas) {
 for(const data of datas.meals){
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  
  <div class="card">
      <img src="${data.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${data.strMeal}</h5>
          <p class="card-text ">${data.strInstructions.substring(0,300)}...</p>
      </div>
  </div>
  `;
  cardContainer.appendChild(div)
 }
}


