// list categories
export const categories = {
  SPORTS: 'sports',
  LOVE: 'love'
}

// get words from available categories
export const getWords = (categories = []) => {
  if(categories.includes('sports') && categories.includes('love')) {
    return ['Hello', 'Nepal','love', 'sex' ]
  }
  
  if(categories.includes('sports')) {
    return ['football', 'screamer']
  }

  if(categories.includes('love')) {
    return ['love', 'sex']
  }

  return ['football', 'screamer','love', 'sex', 'harley' ]  

}
