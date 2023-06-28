
const toggleMenu = () => document.body.classList.toggle("open");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const mainImg = document.querySelector(".main-img");
const mainBtn = document.querySelector(".img-btn");
const slider = document.querySelector(".slider");
const sliderImg = document.querySelector(".slider-img");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const sliderOne = document.getElementById("slider-one");
const sliderTwo = document.getElementById("slider-two");
const sliderThree = document.getElementById("slider-three");
const sliderFour = document.getElementById("slider-four");
const sliderCloseBtn = document.querySelector(".slider-close");
const cartImg = document.querySelector(".cart-img");
const menu = document.querySelector(".menu");
const empty = document.querySelector(".empty");
const detail = document.querySelector(".detail");
const cartSup = document.getElementById("cart-sup");
const buyH3 = document.querySelector(".buy-h3");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const total = document.getElementById("total");
const sum = document.getElementById("sum");
const remove = document.getElementById("delete");
const image = document.getElementsByClassName(".img");

// Define the image sources
const imageSources = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
];

let currentIndex = 0;

// Set the initial active image and slider image
setMainImage(imageSources[currentIndex]);
setSliderImage(imageSources[currentIndex]);
one.classList.add("active");
sliderOne.classList.add("active");

one.addEventListener('click', () => {
  currentIndex = 0;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
  setActiveButton(one);
  setActiveButton(sliderOne);
});

two.addEventListener('click', () => {
  currentIndex = 1;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
  setActiveButton(two);
  setActiveButton(sliderTwo);
});

three.addEventListener('click', () => {
  currentIndex = 2;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
  setActiveButton(three);
  setActiveButton(sliderThree);
});

four.addEventListener('click', () => {
  currentIndex = 3;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
  setActiveButton(four);
  setActiveButton(sliderFour);
});

mainBtn.addEventListener('click', () => {
  showSlider(mainImg.getAttribute('src'));
});

previousBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageSources.length;
  setMainImage(imageSources[currentIndex]);
  setSliderImage(imageSources[currentIndex]);
});

sliderCloseBtn.addEventListener('click', () => {
  hideSlider();
});

function setMainImage(imageSrc) {
  mainImg.setAttribute('src', imageSrc);
}

function setSliderImage(imageSrc) {
  sliderImg.setAttribute('src', imageSrc);
}

function setActiveButton(button) {
  const activeButton = document.querySelector(".thumb-btn.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  button.classList.add("active");
}

function showSlider(imageSrc) {
  setSliderImage(imageSrc);
  slider.style.display = "block";
}

function hideSlider() {
  slider.style.display = "none";
}

cartImg.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }

  if (parseInt(buyH3.textContent) !== 0) {
    empty.style.display = 'none';
    cartSup.style.display = 'block';
    detail.style.display = "block";
  } else {
    empty.style.display = 'block';
    cartSup.style.display = 'none';
    detail.style.display = "none";
  }
});

plus.addEventListener('click', () => {
  let currentValue = parseInt(buyH3.textContent);
  currentValue += 1;
  buyH3.textContent = currentValue;
});

minus.addEventListener('click', () => {
  let currentValue = parseInt(buyH3.textContent);
  if (currentValue > 0) {
    currentValue -= 1;
  }
  buyH3.textContent = currentValue;
});

sum.addEventListener('click', () => {
  cartSup.textContent = buyH3.textContent;
  let totalPrice = 125.0 * parseFloat(buyH3.textContent);
  let formattedTotal = '$' + totalPrice.toFixed(2);
  total.textContent = formattedTotal;
  cartSup.style.display = "block";
  cartSup.textContent = buyH3.textContent;
});

remove.addEventListener('click', () => {
  buyH3.textContent = 0;
  empty.style.display = 'block';
  detail.style.display = 'none';
  cartSup.style.display = 'none';
});
