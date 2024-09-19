const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

  const productsContainer = document.querySelector(".products");
  const SearchInput = document.querySelector(".search");
  const CatagoriesContainer = document.querySelector(".Cats");
  const PriceRange = document.querySelector(".PriceRange");
  const PriceValue = document.querySelector(".PriceValue");

  const displayProducts = (filteredData) => {
    productsContainer.innerHTML = filteredData.map(product =>
                `<div class="product">
                    <img src=${product.img} alt=""/>
                    <span class="name">${product.name}</span>
                    <span class="Price">$${product.price}</span>
                </div>`
    ).join(""); 
  }

  displayProducts(data);

  SearchInput.addEventListener("keyup", (e) => {
        const textValue = e.target.value.toLowerCase();
        if(textValue){
            displayProducts(data.filter(item => item.name
                .toLocaleLowerCase().indexOf(textValue) !== -1));
        }
        else{
            displayProducts(data);
        }
  });

  const setCatagories = () =>{
    const allCats = data.map(item => item.cat);
    const catagories =["All",...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
    })];

    CatagoriesContainer.innerHTML = catagories.map(cat =>
        ` <span class="cat">${cat}</span>`
    ).join("");

    CatagoriesContainer.addEventListener("click", (e) =>{
        const selectedCatagorie = e.target.textContent;
        selectedCatagorie === "All" ? 
        displayProducts(data) : displayProducts(data.filter
            (item => item.cat === selectedCatagorie));
    });
  };

  const setPrices = () => {
    const priceList = data.map(item => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    PriceRange.min = minPrice;
    PriceRange.max = maxPrice;
    PriceRange.value = maxPrice;
    PriceValue.textContent = "$" + maxPrice;
    PriceRange.addEventListener("click", (e) =>{
        PriceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter
            (item => item.price <= e.target.value));
    })
  }

  setCatagories();
  setPrices();