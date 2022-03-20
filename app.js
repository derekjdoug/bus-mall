'use strict';

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const results = document.getElementById('results');
let imageOne = document.getElementById('imageOne');
let imageTwo = document.getElementById('imageTwo');
let imageThree = document.getElementById('imageThree');

//Constructor Function
function Product(name, filePath, views) {
  this.name = name;
  this.filePath = filePath;
  this.views = views;
}
console.log(Product);

//Products Array
let productsArr = [
  new Product('bag', 'img/bag.jpg', 0),
  new Product('banana', 'img/banana.jpg', 0),
  new Product('bathroom', 'img/bathroom.jpg', 0),
  new Product('boots', 'img/boots.jpg', 0),
  new Product('breakfast', 'img/breakfast.jpg', 0),
  new Product('bubblegum', 'img/bubblegum.jpg', 0),
  new Product('chair', 'img/chair.jpg', 0),
  new Product('cthulhu', 'img/cthulhu.jpg', 0),
  new Product('dog-duck', 'img/dog-duck.jpg', 0),
  new Product('dragon', 'img/dragon.jpg', 0),
  new Product('pen', 'img/pen.jpg', 0),
  new Product('pet-sweep', 'img/pet-sweep.jpg', 0),
  new Product('scissors', 'img/scissors.jpg', 0),
  new Product('shark','img/shark.jpg', 0),
  new Product('sweep', 'img/sweep.png', 0),
  new Product('tauntaun', 'img/tauntaun.jpg', 0),
  new Product('unicorn', 'img/unicorn.jpg', 0),
  new Product('water-can', 'img/water-can.jpg', 0),
  new Product('wine-glass', 'img/wine-glass.jpg', 0)
];
console.log(productsArr);

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
  // console.log(threeProducts);
  return threeProducts;
};
// console.log(threeProducts[0]);
let threeProducts = Product.productDisplay();

// console.log(productsArr);

Product.render = function () {

  let print = threeProducts;

  let prodImg1 = document.createElement('img');
  prodImg1.src = `${print[0].filePath}`;
  prodImg1.alt = `${print[0].name}`;
  prodImg1.id = 'imageOne';
  img1.appendChild(prodImg1);
  let prodImg2 = document.createElement('img');
  prodImg2.src = `${print[1].filePath}`;
  prodImg2.alt = `${print[1].name}`;
  prodImg2.id = 'imageTwo';
  img2.appendChild(prodImg2);
  let prodImg3 = document.createElement('img');
  prodImg3.src = `${print[2].filePath}`;
  prodImg3.alt = `${print[2].name}`;
  prodImg3.id = 'imageThree';
  img3.appendChild(prodImg3);
};

Product.render();

let userChoice1 = img1;

userChoice1.addEventListener('click', function (event) {
  event.preventDefault();

  let read = threeProducts;
  console.log(read);

  let row = document.createElement('tr');
  results.appendChild(row);
  let print = document.createElement('td');
  print.textContent = threeProducts[0].name;
  row.appendChild(print);

  reset();
  Product.render();

});

let userChoice2 = img2;

userChoice2.addEventListener('click', function (event) {
  event.preventDefault();

  let read = threeProducts;
  console.log(read);

  let row = document.createElement('tr');
  results.appendChild(row);
  let print = document.createElement('td');
  print.textContent = threeProducts[1].name;
  row.appendChild(print);

  reset();
  Product.render();
});

let userChoice3 = img3;

userChoice3.addEventListener('click', function (event) {
  event.preventDefault();

  let read = threeProducts;
  console.log(read);

  let row = document.createElement('tr');
  results.appendChild(row);
  let print = document.createElement('td');
  print.textContent = read[2].name;
  row.appendChild(print);

  reset();
  Product.render();

});

function reset() {
  while (img1.firstChild, img2.firstChild, img3.firstChild) {
    img1.removeChild(img1.firstChild);
    img2.removeChild(img2.firstChild);
    img3.removeChild(img3.firstChild);
  }
}
