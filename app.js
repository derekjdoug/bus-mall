'use strict';

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

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
Product.prototype.productDisplay = function () {
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

console.log(productsArr);



Product.prototype.render = function () {
  let threeProducts = this.productDisplay();
  console.log(threeProducts[0]);
  let prodImg1 = document.createElement('img');
  prodImg1.src = `${threeProducts[0].filePath}`;
  img1.appendChild(prodImg1);
  let prodImg2 = document.createElement('img');
  prodImg2.src = `${threeProducts[1].filePath}`;
  img2.appendChild(prodImg2);
  let prodImg3 = document.createElement('img');
  prodImg3.src = `${threeProducts[2].filePath}`;
  img3.appendChild(prodImg3);
};

Product.prototype.render();
