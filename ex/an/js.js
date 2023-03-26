const definitionElements = document.querySelectorAll('.definition');

function showPopup(e) {
  const popup = document.querySelector('.popup');
  popup.innerHTML = e.target.getAttribute('data-definition');
  popup.style.display = 'block';
  popup.style.top = `${e.pageY + 10}px`;
  popup.style.left = `${e.pageX + 10}px`;
}

function hidePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

definitionElements.forEach(element => {
  element.addEventListener('mouseover', showPopup);
  element.addEventListener('mouseout', hidePopup);
});
