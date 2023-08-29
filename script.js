const loadData = async (searchText = 'iphone' ) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayData(phones,searchText);
};

const displayData = (phones,searchText) => {
  const phonesContainer = document.getElementById("phones-container");

  phonesContainer.innerHTML = ''

  console.log(phones);
  
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
          <button class="btn btn-primary">Buy Now</button>
        </div>
        
        `;
    phonesContainer.appendChild(phoneCard);
  });

};

const searchHandler = async() =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log('button clicked',searchText);
  loadData(searchText);
  const loadingSpinner = document.getElementById('loading-spinner');
  console.log(loadingSpinner);
}

loadData();

