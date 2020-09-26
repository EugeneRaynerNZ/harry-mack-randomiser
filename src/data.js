function getData() {
    return [
      {
        id: getId(),
        text: "Spread",
      },
      {
        id: getId(),
        text: "Love",
      },
      {
        id: getId(),
        text: "Sex",
      },
      {
        id: getId(),
        text: "Happy",
      },
      {
        id: getId(),
        text: "Seal",
      },
      {
        id: getId(),
        text: "Dog",
      },
      {
        id: getId(),
        text: "Beer",
      },
      {
        id: getId(),
        text: "Drink",
      },
      {
        id: getId(),
        text: "Glasses",
      },
      {
        id: getId(),
        text: "Lighter",
      },
      {
        id: getId(),
        text: "Computer",
      },
      {
        id: getId(),
        text: "Nerd",
      },
      {
        id: getId(),
        text: "Camera",
      },
      {
        id: getId(),
        text: "Unity",
      },
      {
        id: getId(),
        text: "Picture",
      },
      {
        id: getId(),
        text: "Lamp",
      },
    ];
  }
  
  let counter = 0;
  
  function getId() {
    return `${counter++}`;
  }
  
  export default getData();
  