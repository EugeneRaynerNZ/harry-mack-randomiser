const wordsData = {
  sports: 'football, screamer, $300K/week',
  love: 'love, sex'
}

export const getWords = (categories = []) => {
  if(categories.includes('sports') && categories.includes('love')) {
    return ['football', 'screamer','love', 'sex' ]
  }
  
  if(categories.includes('sports')) {
    return ['football', 'screamer']
  }

  if(categories.includes('love')) {
    return ['love', 'sex']
  }

  return ['football', 'screamer','love', 'sex' ]  

  // const words = Object.entries(wordsData).flatMap(([category, words]) => words.split(',')).map(word => word.trim()) // ['sport', 'football, ...']

  // console.log(words)

  // return words
}

// function getWords() {
//     return [
//       {
//         id: getId(),
//         text: "Spread",
//         category: "Girl"
//       },
//       {
//         id: getId(),
//         text: "Love",
//         category: "Girl"
//       },
//       {
//         id: getId(),
//         text: "Sex",
//         category: "Girl"
//       },
//       {
//         id: getId(),
//         text: "Happy",
//         category: "Girl"
//       },
//       {
//         id: getId(),
//         text: "Seal",
//         category: "Animal"
//       },
//       {
//         id: getId(),
//         text: "Dog",
//         category: "Animal"
//       },
//       {
//         id: getId(),
//         text: "Beer",
//         category: "Partying"
//       },
//       {
//         id: getId(),
//         text: "Drink",
//         category: "Partying"
//       },
//       {
//         id: getId(),
//         text: "Glasses",
//         category: "Partying"
//       },
//       {
//         id: getId(),
//         text: "Lighter",
//         category: "Partying"
//       },
//       {
//         id: getId(),
//         text: "Computer",
//         category: "Technology"
//       },
//       {
//         id: getId(),
//         text: "Nerd",
//         category: "Technology"
//       },
//       {
//         id: getId(),
//         text: "Camera",
//         category: "Technology"
//       },
//       {
//         id: getId(),
//         text: "Unity",
//         category: "Technology"
//       },
//       {
//         id: getId(),
//         text: "Picture",
//         category: "Technology"
//       },
//       {
//         id: getId(),
//         text: "Lamp",
//         category: "Furniture"
//       },
//     ];
//   }
  
//   let counter = 0;
  
//   function getId() {
//     return `${counter++}`;
//   }
  
  