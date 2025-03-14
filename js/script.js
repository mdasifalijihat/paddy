const loadData = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    showCategories(data.categories)
}

const showCategories = (categories)=>{
categories.forEach((element) => {
    const categoryContainer = document.getElementById('category-container');
    const div = document.createElement('div');
    div.innerHTML = `    
    <button class="flex justify-center items-center gap-6 border py-4 px-6 rounded-3xl"> <img src="${element.category_icon}" alt=""> <p class="text-3xl font-semibold "> ${element.category} </p> </button>
    `
    categoryContainer.appendChild(div)
})

}


loadData();