const loadData = (searchInputValue) => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
      .then(res => res.json())
      .then(data => displayData(data.meals))
}

const displayData = data => {
      const mainContent = document.getElementById('main-cont')
      mainContent.innerHTML = ''
      data.forEach(meal => {
            const mealDiv = document.createElement('div')
            mealDiv.innerHTML = `
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                              <img class="rounded-t-lg" src="${meal.strMealThumb}" alt="" />
                        </a>
                        <div class="p-5">
                              <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${meal.strMeal}</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </button>
                        </div>
                  </div>
            `
            mainContent.appendChild(mealDiv)
      });
}

const searchMeal = () => {
      const searchInputValue = document.getElementById('search-field').value
      loadData(searchInputValue)
}

loadData('rice')