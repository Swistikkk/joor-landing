var addNewMagazine = document.querySelector('#add-new-magazine');
var mainPopup = document.querySelector('.main-popup');
var backgroundPopup = document.querySelector('.main-popup-background');
var wannaLikeThis = document.querySelector('#wanna-like-this');
var popupForm = document.querySelector('.main-form');
var topForm = document.querySelector('.top-banner__form');
var bottomForm = document.querySelector('.support__feedback');
var thanksPopup = document.querySelector('#thanks-popup');

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

function openThanksPopup(node) {
  thanksPopup.innerHTML = node;
  thanksPopup.classList.add('thanks-popup--active');
  backgroundPopup.classList.add('activePopup');
}

function closeThanksPopup() {
  thanksPopup.classList.remove('thanks-popup--active');
  backgroundPopup.classList.remove('activePopup');
}

backgroundPopup.addEventListener('click', function() {
  closePopup();
  closeThanksPopup();
});

popupForm.addEventListener('submit', function(event) {
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this[1].value)) {
    alert('Введите правильный E-mail типа "myemail@email.com"');
  } else {
    if (this[0].value !== '' && this[1].value !== '' && this[2].value !== '') {
      var formData = new FormData;
      formData.append("name", this[0].value);
      formData.append("phone", this[1].value);
      formData.append("email", this[2].value);
      fetch('https://joor.me/business', { method: 'post', body: formData }).then(function(response) {
        if(response.success) {
          openThanksPopup('<h2>Спасибо! <br /> Ваша заявка принята.</h2><p>Мы свяжемся с вами в ближайшее время.</p>');
          setTimeout(closeThanksPopup(), 2000);
        } else {
          openThanksPopup('<h2>Ошибка!</h2><p>К сожалению ваш запрос не удалось отправить из-за неполадок на сервере, попробуйте позже</p>');
          setTimeout(closeThanksPopup(), 2000);
        }
        this.reset();
      });
    } else {
      alert("Заполните пустые поля!");
    }
  }

  event.preventDefault();
  return false;
});

topForm.addEventListener('submit', function(event) {
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this[1].value)) {
    alert('Введите правильный E-mail типа "myemail@email.com"');
  } else {
    if (this[0].value !== '' && this[1].value !== '' && this[2].value !== '') {
      var formData = new FormData;
      formData.append("name", this[0].value);
      formData.append("email", this[1].value);
      formData.append("phone", this[2].value);

      fetch('https://joor.me/business', { method: 'post', body: formData }).then(function(response) {
        if(response.success) {
          openThanksPopup('<h2>Спасибо! <br /> Ваша заявка принята.</h2><p>Мы свяжемся с вами в ближайшее время.</p>');
          setTimeout(closeThanksPopup(), 2000);
        } else {
          openThanksPopup('<h2>Ошибка!</h2><p>К сожалению ваш запрос не удалось отправить из-за неполадок на сервере, попробуйте позже</p>');
          setTimeout(closeThanksPopup(), 2000);
        }
        this.reset();
      });
    } else {
      alert("Заполните пустые поля!");
    }
  }

  event.preventDefault();
  return false;
});

bottomForm.addEventListener('submit', function(event) {
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this[1].value)) {
    alert('Введите правильный E-mail типа "myemail@email.com"');
  } else {
    if (this[0].value !== '' && this[1].value !== '') {
      var formData = new FormData;
      formData.append("phone", this[0].value);
      formData.append("text", this[1].value);
      console.log(this[0].value, this[1].value);
      fetch('https://joor.me/business', { method: 'post', body: formData }).then(function(response) {
        if(response.success) {
          openThanksPopup('<h2>Спасибо! <br /> Ваша заявка принята.</h2><p>Мы свяжемся с вами в ближайшее время.</p>');
          setTimeout(closeThanksPopup(), 2000);
        } else {
          openThanksPopup('<h2>Ошибка!</h2><p>К сожалению ваш запрос не удалось отправить из-за неполадок на сервере, попробуйте позже</p>');
          setTimeout(closeThanksPopup(), 2000);
        }
        this.reset();
      });
    } else {
      alert("Заполните пустые поля!");
    }
  }

  event.preventDefault();
  return false;
});

$('#js-phone').mask('+7(999) 999-99-99');
$('#js-phone-footer').mask('+7(999) 999-99-99');
$('.js-number').mask('+7(999) 999-99-99');