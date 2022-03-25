'use strict';

const showResults = document.getElementById('item2');
const clickResults = document.getElementById('print');
let count = 0;
let rounds = 25;
let productLength = 3;
let img1 = document.getElementById('hold[0].name');
let img2 = document.getElementById('hold[1].name');
let img3 = document.getElementById('hold[2].name');
let productNamesList = [];
let productVotesList = [];
let productViewsList = [];

//Constructor Function
function Product(name, filePath, views, clicks) {
  this.name = name;
  this.filePath = filePath;
  this.views = views;
  this.clicks = clicks;
}

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
  new Product('shark', 'img/shark.jpg', 0, 0),
  new Product('sweep', 'img/sweep.png', 0, 0),
  new Product('tauntaun', 'img/tauntaun.jpg', 0, 0),
  new Product('unicorn', 'img/unicorn.jpg', 0, 0),
  new Product('water-can', 'img/water-can.jpg', 0, 0),
  new Product('wine-glass', 'img/wine-glass.jpg', 0, 0)
];

// Function that randomly generates 3 images from directory
Product.productDisplay = function () {
  let threeProducts = [];
  let i;
  for (i = 0; i < 3; i++) {
    let product = productsArr[Math.floor(Math.random() * productsArr.length)];
    if (threeProducts.includes(product)) {
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

//single product
Product.singleProduct = function () {
  let oneProduct = productsArr[Math.floor(Math.random() * productsArr.length)];
  return oneProduct;
};

//multiple products
Product.uniqueProductDisplay = function () {
  let uniqueProductsArr = [];
  while (uniqueProductsArr.length < productLength) {
    let unique = Product.singleProduct();
    while (!uniqueProductsArr.includes(unique)) {
      uniqueProductsArr.push(unique);
    }
    for (let i = 0; i < uniqueProductsArr.length; i++) {
      for (let j = 0; j < uniqueProductsArr.length; j++) {
        while (uniqueProductsArr[i] === hold[j]) {
          let product = Product.singleProduct();
          while (!uniqueProductsArr.includes(product))
            uniqueProductsArr.splice([i], 1, product);
        }
      }
    }
  }
  for (let k = 0; k < uniqueProductsArr.length; k++) {
    uniqueProductsArr[k].views++;
  }
  return uniqueProductsArr;
};

Product.render = function () {
  hold = Product.uniqueProductDisplay();

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

let userChoice1 = img1;
userChoice1.addEventListener('click', function (event) {
  event.preventDefault();
  hold[0].clicks++;
  count++;
  reset();
  for (let i = 0; i < 1; i++) {
    if (count < rounds) {
      Product.render();
    }
  }
  showChart();
});

let userChoice2 = img2;
userChoice2.addEventListener('click', function (event) {
  event.preventDefault();
  hold[1].clicks++;
  count++;

  reset();
  for (let i = 0; i < 1; i++) {
    if (count < rounds) {
      Product.render();
    }
  }
  showChart();
});

let userChoice3 = img3;
userChoice3.addEventListener('click', function (event) {
  event.preventDefault();
  hold[2].clicks++;
  count++;
  reset();
  for (let i = 0; i < 1; i++) {
    if (count < rounds) {
      Product.render();
    }
  }
  showChart();
});

function reset() {
  while (img1.firstChild, img2.firstChild, img3.firstChild) {
    img1.removeChild(img1.firstChild);
    img2.removeChild(img2.firstChild);
    img3.removeChild(img3.firstChild);
  }
}

showResults.addEventListener('click', function () {
  if (count === rounds) {
    for (let i = 0; i < productsArr.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${productsArr[i].name} had ${productsArr[i].clicks} votes, and was seen ${productsArr[i].views} times`;
      clickResults.appendChild(li);
    }
  }
});

function chartRender(){
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNamesList,
      datasets: [{
        label: '# of Votes',
        data: productVotesList,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {label: '# of views',
        data: productViewsList,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  chartData();
}

function showChart(){
  if(count === rounds){
    chartRender();
  }
}

function chartData(){
  let length = productsArr.length;
  for(let i = 0; i < length; i++){
    productNamesList.push(productsArr[i].name);
    productVotesList.push(productsArr[i].clicks);
    productViewsList.push(productsArr[i].views);
  }
}
