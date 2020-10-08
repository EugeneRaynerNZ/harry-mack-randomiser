// list categories
export const categories = {
  SPORT: "sport",
  LOVE: "love",
};

async function getApiData(categories) {
  const response = await fetch(
    `https://api.datamuse.com/words?rel_jja=${categories.join(",")}`
  );

  const data = await response.json();

  return data.map((x) => x.word);
}

// get words from available categories
export const getWords = (categories = []) => {
  // if(categories.includes('sports') && categories.includes('love')) {
  //   return ['Hello', 'Nepal','love', 'sex' ]
  // }

  // if(categories.includes('sports')) {
  //   return ['football', 'screamer']
  // }

  // if(categories.includes('love')) {
  //   return ['love', 'sex']
  // }

  return getApiData(categories);

  // return ["football", "screamer", "love", "sex", "harley"];
};
