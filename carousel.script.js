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

const screenController = (slideDiv, indicatorsDiv) => {
	const images = createImgArray();
	let imagesLength = images.length;
	let currentImage = 0;

	slideDiv.appendChild(images[currentImage]);
	indicatorsDiv.children[currentImage].classList.add('circle-active')

	const rotateCarousel = (direction) => {
		slideDiv.removeChild(images[currentImage]);
		indicatorsDiv.children[currentImage].classList.remove('circle-active')
		if (direction === 'backward') {
			currentImage = (currentImage - 1 + imagesLength) % imagesLength;
		}
		if (direction === 'forward') {
			currentImage = (currentImage + 1) % imagesLength;
		}
		indicatorsDiv.children[currentImage].classList.add('circle-active')
		slideDiv.appendChild(images[currentImage]);
	};

	setInterval(()=> {
		rotateCarousel('forward')
	}, 5000)

  return { rotateCarousel }
};

const initializeEventListeners = (controller) => {
	const backward = document.querySelector('.backward');
	const forward = document.querySelector('.forward');
	backward.addEventListener('click', () => controller.rotateCarousel('backward'));
	forward.addEventListener('click', () => controller.rotateCarousel('forward'));
};

const slideDiv = document.querySelector('.slide');
const indicatorsDiv = document.querySelector('.indicators')
const controller = screenController(slideDiv, indicatorsDiv);
initializeEventListeners(controller);



console.log(indicatorsDiv.children[0])