const inputName = document.getElementById("input-name");
const btnShow = document.getElementById("btn-show");
const divResult = document.getElementById("div-result");
const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

btnShow.addEventListener("click", async function SearchRecipe() {
  try {
    const name = inputName.value.trim();
    divResult.innerHTML = "";

    divResult.innerHTML = "Loading...";
    const response = await fetch(apiURL + name);
    const data = await response.json();
    if (!data.meals) {
      divResult.innerHTML = "No food has found!";
      return;
    }
    divResult.innerHTML = "";
    data.meals.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `<img src='${element.strMealThumb}'/>
            <h3>${element.strMeal}</h3>
            <span class="title">Category:</span><span>${element.strCategory}</span><br>
            <span class="title">Area:</span><span>${element.strArea}</span><br>
            <p class="title-ins">Instruction:</p><p class="instruction">${element.strInstructions}</p>`;
      div.classList.add("meal");
      divResult.appendChild(div);
    });

  } catch (error) {
    divResult.textContent = "Error";
  }
});
