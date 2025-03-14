const loadData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  showCategories(data.categories);
};

const showCategories = (categories) => {
  categories.forEach((element) => {
    const categoryContainer = document.getElementById("category-container");
    const div = document.createElement("div");
    div.innerHTML = `    
    <button onclick="loadPets('${element.category}')" class="flex justify-center items-center gap-6 border py-4 px-6 rounded-3xl"> <img src="${element.category_icon}" alt=""> <p class="text-3xl font-semibold "> ${element.category} </p> </button>
    `;
    categoryContainer.appendChild(div);
  });
};

const loadPets = async (categoryName) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
  const data = await response.json();
  displayPets(data.data)
};

const displayPets = (pets) => {
  const cardCategory = document.getElementById('card-category');
  cardCategory.innerHTML = "";
  if (pets.length === 0) {
    console.log('data nai');
    cardCategory.innerHTML = `
    <p class="text-center items-center font-semibold text-rose-700 text-3xl "> No data Found  </p>
    `
  }
  pets.forEach((pet) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src="${pet.image}" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${pet.breed}</h2>
            <p>Breed: ${pet.breed}</p>
            <p>${pet.date_of_birth}</p>
            <p>Gender: ${pet.gender}</p>
            <p>${pet.price}</p>
            <div class="card-actions">
              <div class="badge badge-outline">Like</div>
              <div class="badge badge-outline">Adopt</div>
              <div class="badge badge-outline">Details</div>
            </div>
          </div>
        </div>
        `
    cardCategory.appendChild(div)
  })
}


loadPets('cat')
loadData();
