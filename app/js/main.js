var addNewMagazine = document.querySelector('#add-new-magazine');
var mainPopup = document.querySelector('.main-popup');
var backgroundPopup = document.querySelector('.main-popup-background');
var wannaLikeThis = document.querySelector('#wanna-like-this');
var popupForm = document.querySelector('.main-form');
var topForm = document.querySelector('.top-banner__form');
var bottomForm = document.querySelector('.support__feedback');

addNewMagazine.addEventListener('click', function(event) {
  event.preventDefault();
  openPopup();
});

wannaLikeThis.addEventListener('click', function(event) {
  event.preventDefault();
  openPopup();
});

function openPopup() {
  mainPopup.classList.add('main-popup--active');
  backgroundPopup.classList.add('activePopup');
}

function closePopup() {
  mainPopup.classList.remove('main-popup--active');
  backgroundPopup.classList.remove('activePopup');
}

backgroundPopup.addEventListener('click', function() {
  closePopup();
});

popupForm.addEventListener('submit', function(event) {
  if (this[0].value !== '' || this[1].value !== '' || this[2].value !== '') {
    var formData = new FormData;
    formData.append("name", this[0].value);
    formData.append("phone", this[1].value);
    formData.append("email", this[2].value);
    fetch('https://joor.me/business', { method: 'post', body: formData });
  } else {
    alert("Заполните пустые поля!");
  }

  event.preventDefault();
  return false;
});

topForm.addEventListener('submit', function(event) {
  if (this[0].value !== '' || this[1].value !== '' || this[2].value !== '') {
    var formData = new FormData;
    formData.append("name", this[0].value);
    formData.append("email", this[1].value);
    formData.append("phone", this[2].value);
    fetch('https://joor.me/business', { method: 'post', body: formData });
  } else {
    alert("Заполните пустые поля!");
  }

  event.preventDefault();
  return false;
});

bottomForm.addEventListener('submit', function(event) {
  if (this[0].value !== '' || this[1].value !== '' || this[2].value !== '') {
    var formData = new FormData;
    formData.append("name", this[0].value);
    formData.append("email", this[1].value);
    formData.append("phone", this[2].value);
    fetch('https://joor.me/business', { method: 'post', body: formData });
  } else {
    alert("Заполните пустые поля!");
  }

  event.preventDefault();
  return false;
});