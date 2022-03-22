'use strict';

const results = document.getElementById('results');
const selection = document.getElementById('selection');
const button = document.getElementById('addButton');
const showResults = document.getElementById('item2');
const clickResults = document.getElementById('print');
// let imageOne = document.getElementById('imageOne');
// let imageTwo = document.getElementById('imageTwo');
// let imageThree = document.getElementById('imageThree');
let rounds = 25;

//Constructor Function
function Product(name, filePath, views, clicks) {
  this.name = name;
  this.filePath = filePath;
  this.views = views;
  this.clicks = clicks;
}
console.log(Product);

//Products Array
let productsArr = [
  new Product('bag', 'img/bag.jpg', 0, 0),
  new Product('banana', 'img/banana.jpg', 0, 0),
  new Product('bathroom', 'img/bathroom.jpg', 0, 0),
  new Product('boots', 'img/boots.jpg', 0, 0),
  new Product('breakfast', 'img/breakfast.jpg', 0, 0),
  new Product('bubblegum', 'img/bubblegum.jpg', 0, 0),
  new Product('chair', 'img/chair.jpg', 0, 0),
  new Product('cthulhu', 'img/cthulhu.jpg', 0, 0),
  new Product('dog-duck', 'img/dog-duck.jpg', 0, 0),
  new Product('dragon', 'img/dragon.jpg', 0, 0),
  new Product('pen', 'img/pen.jpg', 0, 0),
  new Product('pet-sweep', 'img/pet-sweep.jpg', 0, 0),
  new Product('scissors', 'img/scissors.jpg', 0, 0),
  new Product('shark','img/shark.jpg', 0, 0),
  new Product('sweep', 'img/sweep.png', 0, 0),
  new Product('tauntaun', 'img/tauntaun.jpg', 0, 0),
  new Product('unicorn', 'img/unicorn.jpg', 0, 0),
  new Product('water-can', 'img/water-can.jpg', 0, 0),
  new Product('wine-glass', 'img/wine-glass.jpg', 0, 0)
];
console.log(productsArr);

// Product.tableHeader = function () {
//   let i;
//   for(i = 0; i < productsArr.length; i++){
//     let row = document.createElement('tr');
//     row.id = productsArr[i].name;
//     results.appendChild(row);
//     let name = document.createElement('td');
//     name.textContent = productsArr[i].name;
//     row.appendChild(name);
//   }
// };
// Product.tableHeader();

//Function that randomly generates 3 images from directory
Product.productDisplay = function () {
  let threeProducts = [];
  let i;
  for (i = 0; i < 3; i++) {
    let product = productsArr[Math.floor(Math.random() * productsArr.length)];
    if(threeProducts.includes(product)) {
      i--;
    }
    else {
      threeProducts.push(product);
      product.views++;
    }
  }
  return threeProducts;
};

let hold = Product.productDisplay();

let img1 = document.getElementById('hold[0].name');
console.log(img1);
let img2 = document.getElementById('hold[1].name');
let img3 = document.getElementById('hold[2].name');

console.log(hold);
Product.render = function () {

  hold = Product.productDisplay();

  let prodImg1 = document.createElement('img');
  prodImg1.src = `${hold[0].filePath}`;
  prodImg1.alt = `${hold[0].name}`;
  prodImg1.id = `${hold[0].name}`;
  img1.appendChild(prodImg1);
  let prodImg2 = document.createElement('img');
  prodImg2.src = `${hold[1].filePath}`;
  prodImg2.alt = `${hold[1].name}`;
  prodImg2.id = `${hold[1].name}`;
  img2.appendChild(prodImg2);
  let prodImg3 = document.createElement('img');
  prodImg3.src = `${hold[2].filePath}`;
  prodImg3.alt = `${hold[2].name}`;
  prodImg3.id = `${hold[2].name}`;
  img3.appendChild(prodImg3);
};

Product.render();

let count = 0;
let userChoice1 = img1;

userChoice1.addEventListener('click', function (event) {
  event.preventDefault();

  // let read = hold;
  hold[0].clicks++;
  count++;
  // for(let i = 0; i < productsArr.length; i++) {
  //   if(read[0].name === productsArr[i].name) {
  //     let update = document.getElementById(`${productsArr[i].name}`);
  //     let print = document.createElement('td');
  //     if (update.hasChildNodes()) {
  //       update.removeChild(update.firstChild);
  //     }
  //     print.textContent = read[0].clicks;
  //     update.appendChild(print);
  //   }
  // }
  reset();
  for(let i = 0; i < 1; i++){
    if(count < rounds){
      Product.render();
    }
  }
  // Product.render();
  console.log(productsArr);
});

let userChoice2 = img2;

userChoice2.addEventListener('click', function (event) {
  event.preventDefault();

  // let read = hold;
  hold[1].clicks++;
  count++;
  // for(let i = 0; i < productsArr.length; i++) {
  //   if(read[1].name === productsArr[i].name) {
  //     let update = document.getElementById(`${read[1].name}`);
  //     let print = document.createElement('td');
  //     print.textContent = read[1].clicks;
  //     update.appendChild(print);
  //   }
  // }
  reset();
  for(let i = 0; i < 1; i++){
    if(count < rounds){
      Product.render();
    }
  }
  // Product.render();
  console.log(productsArr);
});

let userChoice3 = img3;

userChoice3.addEventListener('click', function (event) {
  event.preventDefault();

  // let read = hold;
  hold[2].clicks++;
  count++;
  // for(let i = 0; i < productsArr.length; i++) {
  //   if(read[2].name === productsArr[i].name) {
  //     let update = document.getElementById(`${read[2].name}`);
  //     let print = document.createElement('td');
  //     print.textContent = read[2].clicks;
  //     update.appendChild(print);
  //   }
  // }
  reset();
  for(let i = 0; i < 1; i++){
    if(count < rounds){
      Product.render();
    }
  }
  // Product.render();
  console.log(productsArr);
});

function reset() {
  while (img1.firstChild, img2.firstChild, img3.firstChild) {
    img1.removeChild(img1.firstChild);
    img2.removeChild(img2.firstChild);
    img3.removeChild(img3.firstChild);
  }
}

// function handleResults(event){
//   if(count === rounds){
//     for(let i = 0; i < productsArr.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${productsArr[i].name} had ${productsArr[i].clicks}, and was seen ${productsArr[i]} times`;
//       showResults.appendChild(li);
//     }
//   }
// }

showResults.addEventListener('click', function(){
  // event.preventDefault();
  if(count === rounds){
    for(let i = 0; i < productsArr.length; i++){
      let li = document.createElement('li');
      li.textContent = `${productsArr[i].name} had ${productsArr[i].clicks} votes, and was seen ${productsArr[i].views} times`;
      clickResults.appendChild(li);
    }
  }
});
