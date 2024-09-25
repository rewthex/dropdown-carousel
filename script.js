const menuBtn = document.querySelector('.menu-btn');
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const contactBtn = document.querySelector('.contact-btn');

const menuItemsDiv = document.querySelector('.menu-items');
const contentDiv = document.querySelector('.content-container')

const toggleMenuVisibility = () => {
	const isHidden = menuItemsDiv.classList.value.includes('hidden');
  if (isHidden) {
		menuItemsDiv.classList.remove('hidden');
	} else {
		menuItemsDiv.classList.add('hidden');
	}
};

const renderPage = (e) => {
  toggleMenuVisibility();
  const page = e.currentTarget.innerText;
  contentDiv.innerText = page;
}

homeBtn.addEventListener('click', renderPage)
aboutBtn.addEventListener('click', renderPage)
contactBtn.addEventListener('click', renderPage)

menuBtn.addEventListener('click', toggleMenuVisibility)
