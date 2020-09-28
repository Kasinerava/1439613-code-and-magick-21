'use strict';

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAME = [` да Марья`, ` Верон`, ` Мирабелла`, ` Вальц`, ` Онопко`, ` Топольницкая`, ` Нионго`, ` Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];


for (let i = 0; i < 4; i++) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  const nameWizard = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + WIZARD_SURNAME[[Math.floor(Math.random() * WIZARD_SURNAME.length)]];
  const coatColor = COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
  const eyesColor = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];

  wizardElement.querySelector(`.setup-similar-label`).textContent = nameWizard;
  wizardElement.querySelector(`.wizard-coat`).style.fill = coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = eyesColor;

  similarListElement.appendChild(wizardElement);
}
