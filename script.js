const loadData = async (searchText = "iphone", isShowAll) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayData(phones, isShowAll);
};

const displayData = (phones, isShowAll) => {
  const phonesContainer = document.getElementById("phones-container");
  const showAll = document.getElementById("show-all");
  // console.log(showAll);

  phonesContainer.innerHTML = "";

  if (phones.length > 15) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }
  console.log(phones.length);
  if (!isShowAll) {
    phones = phones.slice(0, 9);
  }

  phones.forEach((phones) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card bg-base shadow-xl";
    phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phones.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phones.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button onclick = "buyNowHandler()" class="btn btn-primary">Buy Now</button>
          <button class="btn btn-accent">Show Details</button>
        </div>
        
        `;
    phonesContainer.appendChild(phoneCard);
  });
  loadingSnipper(false);
};

// search handler function
const searchHandler = async (isShowAll) => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log('button clicked',searchText);
  loadData(searchText, isShowAll);
  loadingSnipper(true);
};

// Loading Snipper function
const loadingSnipper = (isLoading) => {
  const loadingContainer = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingContainer.classList.remove("hidden");
  } else {
    loadingContainer.classList.add("hidden");
  }
};

// search show item handler
const showAllHandler = () => {
  searchHandler(true);
};

// Buy Now
const buyNowHandler = () => {
  console.log('clickd')
}





loadData();
