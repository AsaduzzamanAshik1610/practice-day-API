const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealdisplay(data.meals))
}
const mealdisplay = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadmealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
            </div>
      `;
        mealContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const search = inputField.value;
    loadMeals(search)
    inputField.value = '';

}

const loadmealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('details-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text"> ${meal.strInstructions.slice(0, 200)} </p>
    <button href="#" class="btn btn-primary">Food</button>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}


loadMeals('');