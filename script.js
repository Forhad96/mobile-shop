const loadData = async (searchText = 'iphone',isShowSearch) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayData(phones,isShowSearch);
};

const displayData = (phones,isShowSearch) => {
  const phonesContainer = document.getElementById("phones-container");

  phonesContainer.innerHTML = ''

  console.log(isShowSearch);
  if(phones.length > 9){
    phones = phones.slice(0,9);
  }else{
    // search show item handler
const showAllHandler = () =>{
  phones = phones.slice(0)
}
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
          <button class="btn btn-primary">Buy Now</button>
        </div>
        
        `;
    phonesContainer.appendChild(phoneCard);
  });
  loadingSnipper(false)

};


// search handler function
const searchHandler = async(isShowSearch) =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log('button clicked',searchText);
  loadData(searchText,isShowSearch);
  loadingSnipper(true)
}

// Loading Snipper function
const loadingSnipper = (isLoading) =>{
  const loadingContainer = document.getElementById('loading-spinner');
  if(isLoading){
    loadingContainer.classList.remove('hidden')
  }
  else{
    loadingContainer.classList.add('hidden')
  }
}




loadData();

