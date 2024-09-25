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

	const changeImage = (direction) => {
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
		changeImage('forward')
	}, 5000)

  return { changeImage }
};

const initializeEventListeners = (controller) => {
	const backward = document.querySelector('.backward');
	const forward = document.querySelector('.forward');
	backward.addEventListener('click', () => controller.changeImage('backward'));
	forward.addEventListener('click', () => controller.changeImage('forward'));
};

const slideDiv = document.querySelector('.slide');
const indicatorsDiv = document.querySelector('.indicators')
const controller = screenController(slideDiv, indicatorsDiv);
initializeEventListeners(controller);