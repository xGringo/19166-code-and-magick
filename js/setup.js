'use strict';

var dataWizards = {
  count: 4,
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};
var userDialog = document.querySelector('.setup');
var setupSimilarWizards = document.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');
setupSimilarWizards.classList.remove('hidden');


var getRandomElement = function (array) {
  var randomInt = Math.floor(Math.random() * (array.length - 1));
  return array[randomInt];
};

var makeWizards = function (wizardsObject) {
  var wizards = [];

  for (var i = 0; i < dataWizards.count; i++) {
    wizards[i] = {
      names : getRandomElement(dataWizards.names) + ' ' + getRandomElement(dataWizards.surnames),
      coatColors : getRandomElement(dataWizards.coatColors),
      eyesColors : getRandomElement(dataWizards.eyesColors)
    }
  }
  return wizards;
};

var cloneWizards = function () {
  var similarWizards = makeWizards();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColors;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;
  return wizardElement;
}

cloneWizards();



