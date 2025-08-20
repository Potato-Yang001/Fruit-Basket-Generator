const fruits = [];

function addFruit() {
  const fruit = prompt(`Please enter a fruit!`);
  if (fruit) {
    fruits.push(fruit);
    alert(`${fruit} added to basket`);
  } else {
    alert('No fruit entered');
  }
}

function viewBasket() {
  if (fruits.length >= 1) {
    let basketList = 'Fruit:\n';
    for (const basket of fruits) {
      basketList += `-${basket}\n`;
    }
    alert(basketList);
  } else {
    alert('Your basket is empty 🧺');
  }
}
