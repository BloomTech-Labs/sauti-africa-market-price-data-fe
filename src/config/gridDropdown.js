const countryList = [
  {
    name: "Uganda",
    abbreviation: "UGA"
  },
  {
    name: "Rwanda",
    abbreviation: "RWA"
  },
  {
    name: "Tanzania",
    abbreviation: "TZA"
  },
  {
    name: "Kenya",
    abbreviation: "KEN"
  },
  {
    name: "Burundi",
    abbreviation: "BDI"
  },
  {
    name: "DR Congo",
    abbreviation: "DRC"
  },
  {
    name: "Malawi",
    abbreviation: "MWI"
  },
  {
    name: "South Sudan",
    abbreviation: "SSD"
  }
];

export const countriesOptions = countryList.map((country, index) => ({
  key: `country-${index}`,
  text: country.name,
  value: country.abbreviation
}));

export const handleCountries = (value, countriesUpdater, queryUpdater) => {
  const countryQuery = value.map((country, index) => {
    if (index > 0) {
      return `&c=${country}`;
    } else {
      return `&c=${country}`;
    }
  });
  countriesUpdater(value);
  queryUpdater(countryQuery.join(""));
};

const currencyList = ["MWK", "RWF", "KES", "UGX", "TZS", "CDF", "BIF", "USD"];

export const currencyOptions = currencyList.map((currency, index) => ({
  key: `currency-${index}`,
  text: currency,
  value: currency
}));

const marketList = [
  {
    market: "ACE Blantyre"
  },
  {
    market: "ACE Lilongwe"
  },
  {
    market: "Arua"
  },
  {
    market: "Arusha"
  },
  {
    market: "Babati"
  },
  {
    market: "Balaka"
  },
  {
    market: "Base"
  },
  {
    market: "Birambo"
  },
  {
    market: "Bugarama"
  },
  {
    market: "Bugiri"
  },
  {
    market: "Buhanda"
  },
  {
    market: "Bujumbura"
  },
  {
    market: "Bukavu"
  },
  {
    market: "Bukoba"
  },
  {
    market: "Bungoma"
  },
  {
    market: "Busasamana"
  },
  {
    market: "Busia"
  },
  {
    market: "Butare"
  },
  {
    market: "Byumba"
  },
  {
    market: "Chimbiya"
  },
  {
    market: "CongoNil"
  },
  {
    market: "Dar es salaam"
  },
  {
    market: "Dodoma"
  },
  {
    market: "Eldoret"
  },
  {
    market: "Embu"
  },
  {
    market: "Gacurabwenge"
  },
  {
    market: "Gahanga"
  },
  {
    market: "Gahoromani"
  },
  {
    market: "Gakenke"
  },
  {
    market: "Garisa"
  },
  {
    market: "Garissa"
  },
  {
    market: "Gasarenda"
  },
  {
    market: "Gaseke"
  },
  {
    market: "Gashyushya"
  },
  {
    market: "Geita"
  },
  {
    market: "Gichumbi"
  },
  {
    market: "Gicumbi"
  },
  {
    market: "Gikongoro"
  },
  {
    market: "Gisenyi"
  },
  {
    market: "Gitega"
  },
  {
    market: "Goma"
  },
  {
    market: "Gulu"
  },
  {
    market: "Iganga"
  },
  {
    market: "Ilala (Buguruni)"
  },
  {
    market: "Intunga"
  },
  {
    market: "Iringa"
  },
  {
    market: "Isingiro"
  },
  {
    market: "Isiolo"
  },
  {
    market: "Juba"
  },
  {
    market: "Kabale"
  },
  {
    market: "Kabarole"
  },
  {
    market: "Kabarondo"
  },
  {
    market: "Kabaya"
  },
  {
    market: "Kajiado"
  },
  {
    market: "kakamega"
  },
  {
    market: "kakmega"
  },
  {
    market: "Kalerwe"
  },
  {
    market: "Kamembe"
  },
  {
    market: "Kampala"
  },
  {
    market: "Kamwendo"
  },
  {
    market: "Kamwendo Market"
  },
  {
    market: "Kamwenge"
  },
  {
    market: "Kapchorwa"
  },
  {
    market: "Karambi"
  },
  {
    market: "Karenge"
  },
  {
    market: "Kasese"
  },
  {
    market: "Kasumbalesa"
  },
  {
    market: "Kasungu"
  },
  {
    market: "Kayenzi"
  },
  {
    market: "KG"
  },
  {
    market: "Kibaigwa"
  },
  {
    market: "Kibirizi"
  },
  {
    market: "Kiboga"
  },
  {
    market: "kibungo"
  },
  {
    market: "Kibuye"
  },
  {
    market: "Kigali"
  },
  {
    market: "Kigoma"
  },
  {
    market: "Kimironko"
  },
  {
    market: "Kimisagara"
  },
  {
    market: "Kinondoni (Tandale )"
  },
  {
    market: "Kirambo"
  },
  {
    market: "Kiramuruzi"
  },
  {
    market: "Kisenyi"
  },
  {
    market: "Kisii"
  },
  {
    market: "Kisumu"
  },
  {
    market: "Kitale"
  },
  {
    market: "Kitui"
  },
  {
    market: "Kizi"
  },
  {
    market: "Kobero"
  },
  {
    market: "Kolwezi"
  },
  {
    market: "Kyankwanzi"
  },
  {
    market: "Kyegegwa"
  },
  {
    market: "Kyenjonjo"
  },
  {
    market: "Likasi"
  },
  {
    market: "Lilongwe"
  },
  {
    market: "Limbe Market"
  },
  {
    market: "lindi"
  },
  {
    market: "Lira"
  },
  {
    market: "Liwonde"
  },
  {
    market: "loitkt"
  },
  {
    market: "Loitoktok"
  },
  {
    market: "Lubumbashi"
  },
  {
    market: "Luwero Market"
  },
  {
    market: "Machakos"
  },
  {
    market: "Madisi"
  },
  {
    market: "Mahoko"
  },
  {
    market: "Majengo"
  },
  {
    market: "Makueni"
  },
  {
    market: "Malindi"
  },
  {
    market: "Masaka"
  },
  {
    market: "Masindi"
  },
  {
    market: "Matimba"
  },
  {
    market: "Mbale"
  },
  {
    market: "Mbarara"
  },
  {
    market: "Mbeya"
  },
  {
    market: "Mchinji"
  },
  {
    market: "Meru"
  },
  {
    market: "Mitundu"
  },
  {
    market: "Mkando"
  },
  {
    market: "Mombasa"
  },
  {
    market: "Morogoro urban"
  },
  {
    market: "Moshi"
  },
  {
    market: "Mponela"
  },
  {
    market: "Mtwara DC"
  },
  {
    market: "Mubende"
  },
  {
    market: "Mubyangabo"
  },
  {
    market: "Mugina"
  },
  {
    market: "Muhanga"
  },
  {
    market: "Muhondo"
  },
  {
    market: "Mukamira"
  },
  {
    market: "Mukarange"
  },
  {
    market: "Mulindi"
  },
  {
    market: "Musanze"
  },
  {
    market: "Musha"
  },
  {
    market: "Musoma"
  },
  {
    market: "Mvera"
  },
  {
    market: "Mwanga"
  },
  {
    market: "Mwanyelwa"
  },
  {
    market: "Mwanza"
  },
  {
    market: "Mzimba"
  },
  {
    market: "Mzuzu"
  },
  {
    market: "Nairobi"
  },
  {
    market: "Nakasero"
  },
  {
    market: "Nakawa"
  },
  {
    market: "Nakuru"
  },
  {
    market: "Namwera"
  },
  {
    market: "Ndago"
  },
  {
    market: "Ngororero"
  },
  {
    market: "Ngozi"
  },
  {
    market: "Njombe"
  },
  {
    market: "Nkhamenya"
  },
  {
    market: "Nkhotakota"
  },
  {
    market: "Nkora"
  },
  {
    market: "Ntcheu"
  },
  {
    market: "Ntchisi"
  },
  {
    market: "Nyabugogo"
  },
  {
    market: "Nyagahinga"
  },
  {
    market: "Nyagatare"
  },
  {
    market: "Nyakarambi"
  },
  {
    market: "Nyamata"
  },
  {
    market: "Nyamirambo"
  },
  {
    market: "Oloitoktok"
  },
  {
    market: "Owino"
  },
  {
    market: "Phalombe"
  },
  {
    market: "Rubavu"
  },
  {
    market: "Ruhango"
  },
  {
    market: "Ruhengeri"
  },
  {
    market: "Ruhuha"
  },
  {
    market: "Rukiga"
  },
  {
    market: "Rukomo"
  },
  {
    market: "Rushashi"
  },
  {
    market: "Rwamagana"
  },
  {
    market: "Salima"
  },
  {
    market: "Shinyanga"
  },
  {
    market: "Shyorongi"
  },
  {
    market: "Singida"
  },
  {
    market: "Songea"
  },
  {
    market: "Soroti"
  },
  {
    market: "Sumbawanga"
  },
  {
    market: "Tabora"
  },
  {
    market: "Tanga/Mgandini"
  },
  {
    market: "TAVETA"
  },
  {
    market: "Temeke"
  },
  {
    market: "Tororo"
  },
  {
    market: "Tunduma"
  },
  {
    market: "Uvira"
  },
  {
    market: "Wajir"
  },
  {
    market: "Yei"
  },
  {
    market: "Ziniya"
  }
];

export const marketOptions = marketList.map((market, index) => ({
  key: `market-${index}`,
  text: market.market,
  value: market.market
}));

export const handleMarkets = (value, marketsUpdater, marketQueryUpdater) => {
  const marketQuery = value.map((market, index) => {
    if (index > 0) {
      return `&m=${market}`;
    } else {
      return `&m=${market}`;
    }
  });
  console.log(value);
  marketsUpdater(value);
  marketQueryUpdater(marketQuery.join(""));
};

const productList = [
  {
    product: "Agwedde Beans"
  },
  {
    product: "Amaranth"
  },
  {
    product: "Apple Bananas"
  },
  {
    product: "Apples"
  },
  {
    product: "Asian Rice"
  },
  {
    product: "Avocado"
  },
  {
    product: "Banana Bunch"
  },
  {
    product: "Barley"
  },
  {
    product: "Beans"
  },
  {
    product: "Beans (K132)"
  },
  {
    product: "Beans Canadian"
  },
  {
    product: "Beans Mwitemania"
  },
  {
    product: "Beans Rosecoco"
  },
  {
    product: "Beef"
  },
  {
    product: "Beet Roots"
  },
  {
    product: "Black Beans (Dolichos)"
  },
  {
    product: "Brinjal/Eggplant"
  },
  {
    product: "Bull"
  },
  {
    product: "Bulrush Millet"
  },
  {
    product: "Cabbages"
  },
  {
    product: "Capsicums"
  },
  {
    product: "Carrots"
  },
  {
    product: "Cassava Chips"
  },
  {
    product: "Cassava Flour"
  },
  {
    product: "Cassava Fresh"
  },
  {
    product: "Cauliflower"
  },
  {
    product: "Cavendish (Bogoya)"
  },
  {
    product: "Celery"
  },
  {
    product: "CEREAL"
  },
  {
    product: "Chemical Fertilizer"
  },
  {
    product: "Chic Pea"
  },
  {
    product: "Chillies"
  },
  {
    product: "Coffee (Arabica)"
  },
  {
    product: "Coffee (Robusta)"
  },
  {
    product: "Cooking Bananas"
  },
  {
    product: "Cow"
  },
  {
    product: "Cow hide"
  },
  {
    product: "Cow Peas"
  },
  {
    product: "Cowpeas"
  },
  {
    product: "Cucumber"
  },
  {
    product: "Ditane"
  },
  {
    product: "Dolichos (Njahi)"
  },
  {
    product: "Dry Fermented Cassava"
  },
  {
    product: "Dry Maize"
  },
  {
    product: "Dry Peas"
  },
  {
    product: "Eggplant"
  },
  {
    product: "Eggs"
  },
  {
    product: "Exotic Chicken"
  },
  {
    product: "Exotic Eggs"
  },
  {
    product: "Finger Millet"
  },
  {
    product: "French Beans"
  },
  {
    product: "Fresh Milk"
  },
  {
    product: "Fresh Peas"
  },
  {
    product: "Garlic"
  },
  {
    product: "Ginger"
  },
  {
    product: "Goat Meat"
  },
  {
    product: "Goat skin and hide"
  },
  {
    product: "Goats"
  },
  {
    product: "Green Beans"
  },
  {
    product: "Green Gram"
  },
  {
    product: "Green Maize"
  },
  {
    product: "Green Peas"
  },
  {
    product: "Green Pepper"
  },
  {
    product: "Ground Nuts"
  },
  {
    product: "Groundnuts"
  },
  {
    product: "Guava"
  },
  {
    product: "Guavas"
  },
  {
    product: "HORTICULTURE"
  },
  {
    product: "Imported Maize"
  },
  {
    product: "Imported Rice"
  },
  {
    product: "Irish Potatoes"
  },
  {
    product: "Kahama Rice"
  },
  {
    product: "Kales"
  },
  {
    product: "Kayiso Rice"
  },
  {
    product: "Kidney Beans"
  },
  {
    product: "Kilombero Rice"
  },
  {
    product: "Leek"
  },
  {
    product: "LEGUMES"
  },
  {
    product: "Lemons"
  },
  {
    product: "Lettuce"
  },
  {
    product: "Limes"
  },
  {
    product: "Local Chicken"
  },
  {
    product: "Local Eggs"
  },
  {
    product: "Maize"
  },
  {
    product: "Maize Bran"
  },
  {
    product: "Maize Flour"
  },
  {
    product: "Maize Grain"
  },
  {
    product: "Maize Meal"
  },
  {
    product: "Mandarine"
  },
  {
    product: "Mangoes Local"
  },
  {
    product: "Mangoes Ngowe"
  },
  {
    product: "Matooke"
  },
  {
    product: "Matooke (kg)"
  },
  {
    product: "Mbeya Rice"
  },
  {
    product: "Milk"
  },
  {
    product: "Millet"
  },
  {
    product: "Millet Flour"
  },
  {
    product: "Millet Grain"
  },
  {
    product: "Mixed Beans"
  },
  {
    product: "Morogoro Rice"
  },
  {
    product: "Mutton"
  },
  {
    product: "Mwezi Moja"
  },
  {
    product: "Nambale Beans"
  },
  {
    product: "Nile Perch"
  },
  {
    product: "NPK Fertilizer"
  },
  {
    product: "Old Beans"
  },
  {
    product: "Onions Dry"
  },
  {
    product: "Oranges"
  },
  {
    product: "OTHERS"
  },
  {
    product: "Paddy Rice"
  },
  {
    product: "Parsley"
  },
  {
    product: "Passion Fruits"
  },
  {
    product: "Pawpaw"
  },
  {
    product: "Pearl Millet"
  },
  {
    product: "Peas"
  },
  {
    product: "Pepper"
  },
  {
    product: "Pigeon Peas"
  },
  {
    product: "Pineapples"
  },
  {
    product: "Pork"
  },
  {
    product: "Pounded Cassava Leaves"
  },
  {
    product: "Processed Honey"
  },
  {
    product: "Pumpkins"
  },
  {
    product: "Red Beans"
  },
  {
    product: "Red Irish Potatoes"
  },
  {
    product: "Red Onions"
  },
  {
    product: "Red Sorghum"
  },
  {
    product: "Rice"
  },
  {
    product: "Rice Bran"
  },
  {
    product: "Ripe Bananas"
  },
  {
    product: "ROOTS & TUBERS"
  },
  {
    product: "Round Potatoes"
  },
  {
    product: "Rwandan Rice"
  },
  {
    product: "Sheep"
  },
  {
    product: "Sheep hide and skin"
  },
  {
    product: "Simsim"
  },
  {
    product: "Sorghum"
  },
  {
    product: "Sorghum Flour"
  },
  {
    product: "Sorghum Grain"
  },
  {
    product: "Soya Beans"
  },
  {
    product: "Spinach"
  },
  {
    product: "Spring Onions"
  },
  {
    product: "STATE DEPARTMENT OF AGRICULTURE."
  },
  {
    product: "Strawberry"
  },
  {
    product: "Sun Dried Cassava"
  },
  {
    product: "Sunflower"
  },
  {
    product: "Sunflower Seed"
  },
  {
    product: "Sunflower Seed Cake"
  },
  {
    product: "Sunflower Seed Meal"
  },
  {
    product: "Super Rice"
  },
  {
    product: "Sweet Bananas"
  },
  {
    product: "Sweet Potatoes"
  },
  {
    product: "Tanzanian  Rice"
  },
  {
    product: "Tilapia"
  },
  {
    product: "Tobacco"
  },
  {
    product: "Tomatoes"
  },
  {
    product: "Turkey"
  },
  {
    product: "Unprocessed Cotton"
  },
  {
    product: "Unprocessed Honey"
  },
  {
    product: "Unprocessed Tea"
  },
  {
    product: "Unprocessed Vanilla"
  },
  {
    product: "Unprocessed/husked rice"
  },
  {
    product: "Upland Rice"
  },
  {
    product: "Urea Fertilisers"
  },
  {
    product: "Urea FertilisersÂ "
  },
  {
    product: "Wheat"
  },
  {
    product: "Wheat Bran"
  },
  {
    product: "Wheat Flour"
  },
  {
    product: "White Beans"
  },
  {
    product: "White Fleshed Sweet Potatoes"
  },
  {
    product: "White Irish Potatoes"
  },
  {
    product: "White Millet"
  },
  {
    product: "White Onions"
  },
  {
    product: "White Sorghum"
  },
  {
    product: "Wood Charcoal"
  },
  {
    product: "Yellow Beans"
  }
];

export const productOptions = productList.map((product, index) => ({
  key: `product=${index}`,
  text: product.product,
  value: product.product
}));

export const handleProducts = (
  value,
  productsUpdater,
  productsQueryUpdater
) => {
  const productQuery = value.map((product, index) => {
    if (index > 0) {
      return `&p=${product}`;
    } else {
      return `&p=${product}`;
    }
  });
  console.log(value);
  productsUpdater(value);
  productsQueryUpdater(productQuery.join(""));
};
