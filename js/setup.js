'use strict';

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandomInteger(array.length, array.length - 1)];
}

const fragment = document.createFragment();

for (let i = 0; i < 4; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  const nameWizard = `${getRandomArrayElement(WIZARD_NAMES)} ${getRandomArrayElement(WIZARD_SURNAME)}`;
  const coatColor = getRandomArrayElement(COAT_COLOR);
  const eyesColor = getRandomArrayElement(EYES_COLOR);

  wizardElement.querySelector(`.setup-similar-label`).textContent = nameWizard;
  wizardElement.querySelector(`.wizard-coat`).style.fill = coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = eyesColor;

  fragment.appendChild(wizardElement);
}
similarListElement.appendChild(fragment);
