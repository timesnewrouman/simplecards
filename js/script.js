const placesList = document.querySelector('.places-list');
const addButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit');
const popupAdd = document.querySelector('.popup.popup_add');
const popupEdit = document.querySelector('.popup.popup_edit');
const popupPicture = document.querySelector('.popup.popup__picture');
const picture = document.querySelector('.picture');
const formAdd = document.forms.new; //new - name формы
const formEdit = document.forms.edit;
const userName = document.querySelector('.user-info__name');
const userAbout = document.querySelector('.user-info__job');

const ERROR_MESSAGES = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Здесь должна быть ссылка'
}

const createCard = (args) => new Card(args);
const cardList = new CardList(placesList, createCard);
const userInfo = new UserInfo(userName, userAbout);

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = {
    name: formAdd.elements.name.value,
    link: formAdd.elements.link.value
  };
  cardList.addCard(data);
  const popup = new Popup(popupAdd);
  popup.close();
  formAdd.reset();
});

addButton.addEventListener('click', function () {
  formAdd.reset();
  const x = new Popup(popupAdd);
  x.open();
  const formValidator = new FormValidator()
  formValidator.setEventListeners(popupAdd);
});

document.addEventListener('click', function () {
  const x = new Popup(popupPicture);
  if (event.target.classList.contains('place-card__image')) {
    picture.src = event.target.style.backgroundImage.slice(5, -2);
    x.open();
  }
});

formEdit.addEventListener('submit', function (event) { // сохранение результата изменения данных формы
  event.preventDefault();
  const name = event.target.querySelector('.popup__input_type_name2').value;
  const about = event.target.querySelector('.popup__input_type_about').value;
  userInfo.updateUserInfo(name, about);
  const popup = new Popup(popupEdit);
  popup.close();
});

editButton.addEventListener('click', function (event) {  // открытие формы edit
  event.preventDefault();
  const name = document.querySelector('.popup__input_type_name2');
  const about = document.querySelector('.popup__input_type_about');
  userInfo.setUserInfo(name, about);
  const popup = new Popup(popupEdit);
  const formValidator = new FormValidator()
  formValidator.setEventListeners(popupEdit);
  popup.open();
});

cardList.render(initialCards);