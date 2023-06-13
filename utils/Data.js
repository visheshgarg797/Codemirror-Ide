const words = {
  country: [
    {
      label: "afghanistan",
      type: "country",
      info: "landlocked country located in South Asia and Central Asia, with a population of approximately 38 million people.",
    },
    {
      label: "albania",
      type: "country",
      info: "southeastern European country known for its rich historical heritage and beautiful landscapes.",
    },
    {
      label: "argentina",
      type: "country",
      info: "country in South America famous for its tango, beef, and diverse natural landscapes.",
    },
    {
      label: "australia",
      type: "country",
      info: "country and continent known for its stunning natural wonders, unique wildlife, and vibrant cities.",
    },
    {
      label: "belgium",
      type: "country",
      info: "western European country famous for its chocolates, waffles, and historic cities like Brussels and Bruges.",
    },
    {
      label: "brazil",
      type: "country",
      info: "largest country in South America, known for its vibrant culture, diverse ecosystems, and the Amazon rainforest.",
    },
    {
      label: "canada",
      type: "country",
      info: "second-largest country in the world, famous for its stunning natural landscapes and ice hockey culture.",
    },
    {
      label: "china",
      type: "country",
      info: "most populous country in the world, known for its rich history, cultural heritage, and diverse cuisine.",
    },
    {
      label: "denmark",
      type: "country",
      info: "scandinavian country in Northern Europe, known for its high standard of living and the concept of hygge.",
    },
    {
      label: "egypt",
      type: "country",
      info: "transcontinental country spanning the northeast corner of Africa and southwest corner of Asia, famous for its ancient civilization and iconic landmarks.",
    },
    {
      label: "france",
      type: "country",
      info: "western European country famous for its art, culture, cuisine, and landmarks like the Eiffel Tower and Louvre Museum.",
    },
    {
      label: "germany",
      type: "country",
      info: "central European country known for its engineering prowess, rich history, and famous contributions to music, philosophy, and science.",
    },
    {
      label: "greece",
      type: "country",
      info: "southeastern European country known for its ancient civilization, stunning islands, and delicious Mediterranean cuisine.",
    },
    {
      label: "hungary",
      type: "country",
      info: "landlocked country in Central Europe known for its rich history, architectural beauty, and thermal baths.",
    },
    {
      label: "india",
      type: "country",
      info: "vast South Asian country known for its diverse culture, ancient heritage, and iconic landmarks like the Taj Mahal.",
    },
    {
      label: "ireland",
      type: "country",
      info: "island country in Northwestern Europe known for its breathtaking landscapes, friendly people, and rich literary tradition.",
    },
    {
      label: "italy",
      type: "country",
      info: "southern European country famous for its art, history, cuisine, and iconic landmarks like the Colosseum and Leaning Tower of Pisa.",
    },
    {
      label: "japan",
      type: "country",
      info: "island nation in East Asia known for its unique culture, technological advancements, and beautiful cherry blossoms.",
    },
    {
      label: "kenya",
      type: "country",
      info: "country in East Africa known for its diverse wildlife, stunning landscapes, and vibrant tribal cultures.",
    },
    {
      label: "lebanon",
      type: "country",
      info: "country in the Middle East known for its rich history, cultural diversity, and delicious cuisine.",
    },
    {
      label: "malaysia",
      type: "country",
      info: "southeast Asian country known for its diverse culture, stunning beaches, and delicious street food.",
    },
    {
      label: "mexico",
      type: "country",
      info: "country in North America known for its ancient civilizations, vibrant culture, and delicious cuisine like tacos and guacamole.",
    },
    {
      label: "netherlands",
      type: "country",
      info: "northwestern European country famous for its flat landscapes, windmills, tulip fields, and vibrant cities like Amsterdam.",
    },
    {
      label: "new zealand",
      type: "country",
      info: "country in the southwestern Pacific Ocean known for its breathtaking landscapes, adventure sports, and Maori culture.",
    },
    {
      label: "norway",
      type: "country",
      info: "scandinavian country known for its stunning fjords, northern lights, and outdoor activities like hiking and skiing.",
    },
    {
      label: "pakistan",
      type: "country",
      info: "south Asian country known for its rich history, cultural heritage, and breathtaking mountain ranges like the Karakoram and Himalayas.",
    },
    {
      label: "peru",
      type: "country",
      info: "country in South America known for its ancient Inca civilization, diverse landscapes, and iconic archaeological site, Machu Picchu.",
    },
    {
      label: "poland",
      type: "country",
      info: "central European country known for its medieval architecture, rich history, and delicious cuisine like pierogi and kielbasa.",
    },
    {
      label: "russia",
      type: "country",
      info: "largest country in the world, spanning Eastern Europe and northern Asia, known for its vast landscapes, cultural heritage, and famous landmarks like the Red Square.",
    },
    {
      label: "saudi arabia",
      type: "country",
      info: "country in the Middle East known for its rich history, desert landscapes, and being the birthplace of Islam.",
    },
    {
      label: "spain",
      type: "country",
      info: "southern European country known for its vibrant culture, stunning beaches, delicious cuisine, and historic cities like Barcelona and Madrid.",
    },
    {
      label: "south africa",
      type: "country",
      info: "southernmost country in Africa known for its diverse wildlife, stunning landscapes, and cultural heritage.",
    },
    {
      label: "south korea",
      type: "country",
      info: "country in East Asia known for its technological advancements, vibrant pop culture, and delicious cuisine like kimchi and bulgogi.",
    },
    {
      label: "sweden",
      type: "country",
      info: "scandinavian country in Northern Europe known for its beautiful landscapes, design innovations, and high standard of living.",
    },
    {
      label: "switzerland",
      type: "country",
      info: "landlocked country in Central Europe known for its stunning alpine scenery, ski resorts, watches, and chocolate.",
    },
    {
      label: "thailand",
      type: "country",
      info: "southeast Asian country known for its beautiful beaches, rich culture, vibrant markets, and delicious street food.",
    },
    {
      label: "turkey",
      type: "country",
      info: "transcontinental country located mainly on the Anatolian Peninsula in Western Asia and a smaller portion on the Balkan Peninsula in Southeast Europe, known for its historical sites and diverse landscapes.",
    },
    {
      label: "united kingdom",
      type: "country",
      info: "country consisting of four countries: England, Scotland, Wales, and Northern Ireland, known for its rich history, royal heritage, and iconic landmarks like Big Ben and Buckingham Palace.",
    },
    {
      label: "united states",
      type: "country",
      info: "country in North America known for its cultural diversity, technological advancements, and iconic landmarks like the Statue of Liberty and Grand Canyon.",
    },
    {
      label: "vietnam",
      type: "country",
      info: "southeast Asian country known for its rich history, beautiful landscapes, bustling cities, and delicious street food like pho and banh mi.",
    },
    // Add more countries here...
  ],
  city: [
    {
      label: "tokyo",
      type: "city",
      info: "capital city of Japan, known for its bustling streets, neon lights, and vibrant culture.",
    },
    {
      label: "paris",
      type: "city",
      info: "capital city of France, known for its romantic atmosphere, iconic landmarks, and world-class cuisine.",
    },
    {
      label: "london",
      type: "city",
      info: "capital city of the United Kingdom, known for its rich history, diverse culture, and famous landmarks.",
    },
    {
      label: "new york city",
      type: "city",
      info: "major city in the United States, known for its skyscrapers, cultural diversity, and vibrant arts scene.",
    },
    {
      label: "berlin",
      type: "city",
      info: "capital city of Germany, known for its creative arts scene, historical landmarks, and vibrant nightlife.",
    },
    {
      label: "rome",
      type: "city",
      info: "capital city of Italy, known for its ancient ruins, stunning architecture, and delicious Italian cuisine.",
    },
    {
      label: "cairo",
      type: "city",
      info: "capital city of Egypt, known for its ancient pyramids, bustling markets, and vibrant street life.",
    },
    {
      label: "mumbai",
      type: "city",
      info: "major city in India, known for its Bollywood film industry, bustling markets, and diverse street food.",
    },
    {
      label: "sydney",
      type: "city",
      info: "major city in Australia, known for its iconic Sydney Opera House, beautiful beaches, and vibrant coastal lifestyle.",
    },
    {
      label: "rio de janeiro",
      type: "city",
      info: "major city in Brazil, known for its stunning beaches, vibrant Carnival celebrations, and iconic Christ the Redeemer statue.",
    },
    {
      label: "cape town",
      type: "city",
      info: "major city in South Africa, known for its breathtaking natural landscapes, diverse wildlife, and vibrant cultural scene.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "rome",
      type: "city",
      info: "capital city of Italy, known for its ancient ruins, stunning architecture, and delicious Italian cuisine.",
    },
    {
      label: "rio de janeiro",
      type: "city",
      info: "major city in Brazil, known for its stunning beaches, vibrant Carnival celebrations, and iconic Christ the Redeemer statue.",
    },
    {
      label: "cape town",
      type: "city",
      info: "major city in South Africa, known for its breathtaking natural landscapes, diverse wildlife, and vibrant cultural scene.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
    {
      label: "istanbul",
      type: "city",
      info: "major city in Turkey, known for its rich history, architectural wonders, and vibrant blend of cultures.",
    },
    {
      label: "amsterdam",
      type: "city",
      info: "capital city of the Netherlands, known for its picturesque canals, historic buildings, and vibrant cycling culture.",
    },
    {
      label: "hanoi",
      type: "city",
      info: "capital city of Vietnam, known for its bustling Old Quarter, delicious street food, and French colonial architecture.",
    },
    {
      label: "bangkok",
      type: "city",
      info: "capital city of Thailand, known for its vibrant street life, ornate temples, and bustling night markets.",
    },
    {
      label: "barcelona",
      type: "city",
      info: "major city in Spain, known for its unique architecture, vibrant street life, and beautiful Mediterranean beaches.",
    },
    {
      label: "moscow",
      type: "city",
      info: "capital city of Russia, known for its iconic Red Square, historic architecture, and rich cultural heritage.",
    },
    {
      label: "dubai",
      type: "city",
      info: "major city in the United Arab Emirates, known for its futuristic skyscrapers, luxury shopping, and desert adventures.",
    },
    {
      label: "beijing",
      type: "city",
      info: "capital city of China, known for its ancient landmarks like the Great Wall, modern architecture, and vibrant street life.",
    },
  ],
  operators: [
    {
      label: "and",
      type: "operator",
      info: "and",
    },
    {
      label: "or",
      type: "operator",
      info: "or",
    },
    {
      label: "not",
      type: "operator",
      info: "not",
    },
  ],
  keywords: [
    {
      label: "sprinklr",
      info: "cmx",
      type: "company",
    },
    {
      label: "apple",
      info: "eat",
      type: "fruit",
    },
    {
      label: "banana",
      apply: "dhqjhdqdbq",
      info: "eat",
      type: "fruit",
    },
    {
      label: "cat",
      info: "animal",
      type: "animal",
    },
    {
      label: "city",
      info: "list name",
      type: "list head",
      apply: "city:",
    },
    {
      label: "country",
      info: "list name",
      type: "list head",
    },
  ],
};

export default words;
