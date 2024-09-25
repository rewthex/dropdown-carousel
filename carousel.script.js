const frameDiv = document.querySelector('.frame');
const slideDiv = document.querySelector('.slide');

const createImgElement = (src, alt) => {
	const image = document.createElement('img');
	image.src = src;
	image.alt = alt;
	return image;
};

const fallImg = createImgElement('./images/fallhighway.jpg', 'fall highway');
const galaxyImg = createImgElement('./images/galaxy.jpg', 'galaxy');
const lakeImg = createImgElement('./images/lakedock.jpg', 'lake dock');

const images = [fallImg, galaxyImg, lakeImg];
let imagesLength = images.length
let currentImage = 0;
slideDiv.append(images[currentImage]);

const backwardSvg = document.querySelector('.backward');
const forwardSvg = document.querySelector('.forward');

const rotateCarousel = (e) => {
  slideDiv.removeChild(images[currentImage])
  const direction = e.currentTarget.dataset.direction
  if (direction === 'backward') {
    currentImage = (currentImage - 1 + imagesLength) % imagesLength; 
  }
  if (direction === 'forward') {
    currentImage = (currentImage + 1) % imagesLength
  }
  slideDiv.append(images[currentImage])
};

backwardSvg.addEventListener('click', rotateCarousel);
forwardSvg.addEventListener('click', rotateCarousel);


