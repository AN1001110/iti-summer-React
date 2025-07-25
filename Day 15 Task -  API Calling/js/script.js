let recipes = [
  "carrot",
  "broccoli",
  "asparagus",
  "cauliflower",
  "corn",
  "cucumber",
  "green pepper",
  "lettuce",
  "mushrooms",
  "onion",
  "potato",
  "pumpkin",
  "red pepper",
  "tomato",
  "beetroot",
  "brussel sprouts",
  "peas",
  "zucchini",
  "radish",
  "sweet potato",
  "artichoke",
  "leek",
  "cabbage",
  "celery",
  "chili",
  "garlic",
  "basil",
  "coriander",
  "parsley",
  "dill",
  "rosemary",
  "oregano",
  "cinnamon",
  "saffron",
  "green bean",
  "bean",
  "chickpea",
  "lentil",
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blackcurrant",
  "blueberry",
  "boysenberry",
  "cherry",
  "coconut",
  "fig",
  "grape",
  "grapefruit",
  "kiwifruit",
  "lemon",
  "lime",
  "lychee",
  "mandarin",
  "mango",
  "melon",
  "nectarine",
  "orange",
  "papaya",
  "passion fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "quince",
  "raspberry",
  "strawberry",
  "watermelon",
  "salad",
  "pizza",
  "pasta",
  "popcorn",
  "lobster",
  "steak",
  "bbq",
  "pudding",
  "hamburger",
  "pie",
  "cake",
  "sausage",
  "tacos",
  "kebab",
  "poutine",
  "seafood",
  "chips",
  "fries",
  "masala",
  "paella",
  "som tam",
  "chicken",
  "toast",
  "marzipan",
  "tofu",
  "ketchup",
  "hummus",
  "chili",
  "maple syrup",
  "parma ham",
  "fajitas",
  "champ",
  "lasagna",
  "poke",
  "chocolate",
  "croissant",
  "arepas",
  "bunny chow",
  "pierogi",
  "donuts",
  "rendang",
  "sushi",
  "ice cream",
  "duck",
  "curry",
  "beef",
  "goat",
  "lamb",
  "turkey",
  "pork",
  "fish",
  "crab",
  "bacon",
  "ham",
  "pepperoni",
  "salami",
  "ribs",
];
let dropdownMenu = document.querySelector(".dropdown-menu");
let searchValue = document.querySelector("input[type=search]");
let searchBtn = document.querySelector(".btn-outline-success");

let options = "";
recipes.forEach((type) => {
  if (type === "pizza") {
    options += `<option class="dropdown-item" selected> ${type}</option>`;
  } else {
    options += `<option class="dropdown-item"> ${type}</option>`;
  }
});

dropdownMenu.innerHTML = options;
function displayContent(data) {
  container = document.querySelector("#recipes");
  let content = "";
  for (let recipe of data) {
    content += `
 <div class="card" style="width: 18rem;">
  <img src="${recipe.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${recipe.title}</h5>
    <p class="card-text">${recipe.publisher}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  }
  container.innerHTML = content;
}
async function getData(query = "pizza") {
  try {
    let res = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    let data = {};
    if (res.ok) {
      data = await res.json();
      data = data.recipes;

      displayContent(data);
    }
  } catch (err) {
    console.error(err);
  }
}

getData();
searchBtn.addEventListener("click", (e) => {
  getData(searchValue.value);
});
dropdownMenu.addEventListener("change", (e) => {
  getData(e.target.value);
});
