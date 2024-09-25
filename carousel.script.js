const createImgElement = (src, alt) => {
	const imageEl = document.createElement('img');
	imageEl.src = src;
	imageEl.alt = alt;
	return imageEl;
};

const createImgArray = () => {
	const fallImg = createImgElement('./images/fallhighway.jpg', 'fall highway');
	const galaxyImg = createImgElement('./images/galaxy.jpg', 'galaxy');
	const lakeImg = createImgElement('./images/lakedock.jpg', 'lake dock');
	return [fallImg, galaxyImg, lakeImg];
};

const screenController = (slideDiv) => {
	const images = createImgArray();
  if (!images.length) {
    slideDiv.innerText = 'No images :('
    return;
  }
	let imagesLength = images.length;
	let currentImage = 0;

	slideDiv.append(images[currentImage]);

	const rotateCarousel = (direction) => {
		slideDiv.removeChild(images[currentImage]);
		if (direction === 'backward') {
			currentImage = (currentImage - 1 + imagesLength) % imagesLength;
		}
		if (direction === 'forward') {
			currentImage = (currentImage + 1) % imagesLength;
		}
		slideDiv.append(images[currentImage]);
	};

  return { rotateCarousel }
};

const initializeEventListeners = (controller) => {
	const backward = document.querySelector('.backward');
	const forward = document.querySelector('.forward');
	backward.addEventListener('click', () => controller.rotateCarousel('backward'));
	forward.addEventListener('click', () => controller.rotateCarousel('forward'));
};

const slideDiv = document.querySelector('.slide');
const controller = screenController(slideDiv);
initializeEventListeners(controller);

setInterval(()=> {
  controller.rotateCarousel('forward')
}, 5000)
