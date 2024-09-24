(function () {
  const menuBtn = document.querySelector('.menu');
  const menuItemsDiv = document.querySelector('.menu-items');
  
  menuBtn.addEventListener('click', () => {
    const isHidden = menuItemsDiv.classList.value.includes('hidden');
    
    if (isHidden) {
      menuItemsDiv.classList.remove('hidden');
    } else {
      menuItemsDiv.classList.add('hidden');
    }	
  });
})();


