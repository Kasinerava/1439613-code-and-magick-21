'use strict';

const userSettings = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = userSettings.querySelector(`.setup-close`);
const userName = document.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && evt.target !== userName) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  userSettings.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  userSettings.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const userNameInput = document.querySelector(`.setup-user-name`);

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

// Изменение цвета одежды глаз и фаербола

const setupWizard = document.querySelector(`.setup-wizard`);
const setupPlayer = document.querySelector(`.setup-player`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
const wizardCoatInput = setupPlayer.querySelector(`[name = "coat-color"]`);
const wizardEyesInput = setupPlayer.querySelector(`[name = "eyes-color"]`);
const wizardFireBallInput = wizardFireball.querySelector(`[name = "fireball-color"]`);

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style.fill = getRandomArrayElement(COATS_COLOR);
  wizardCoatInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener(`click`, function () {
  wizardEyes.style.fill = getRandomArrayElement(EYES_COLOR);
  wizardEyesInput.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener(`click`, function () {
  wizardFireball.style.backgroundColor = getRandomArrayElement(FIREBALL_COLOR);
  wizardFireBallInput.value = wizardFireball.style.backgroundColor;
});

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const fragment = document.createDocumentFragment();

for (let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  const nameWizard = `${getRandomArrayElement(WIZARD_NAMES)} ${getRandomArrayElement(WIZARD_SURNAMES)}`;
  const coatColor = getRandomArrayElement(COATS_COLOR);
  const eyesColor = getRandomArrayElement(EYES_COLOR);

  wizardElement.querySelector(`.setup-similar-label`).textContent = nameWizard;
  wizardElement.querySelector(`.wizard-coat`).style.fill = coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = eyesColor;

  fragment.appendChild(wizardElement);
}
similarListElement.appendChild(fragment);
