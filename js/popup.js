const popupOverlay = document.querySelector('.popup-overlay');
const popup = popupOverlay.querySelector('.popup');
const popupButtonClose = popup.querySelector('.close-btn');
const popupMessage = popup.querySelector('.popupMessage');
const popupDetailedMessage = popup.querySelector('.popupDetailedMessage');
const identifierBlock = popup.querySelector('.identifier-block');
const identifierText = identifierBlock.querySelector('.identifierText');
const copyButton = popup.querySelector('.copyButton');

const closePopup = () => {
  popupOverlay.style.display = 'none';
};

const copyIdentifier = () => {
  const newIdentifier = identifierBlock.querySelector('.identifierText').textContent;
  console.log(identifierBlock);
  console.log('Копируемый текст:', newIdentifier);
  navigator.clipboard.writeText(newIdentifier).then(() => {
    console.log('Идентификатор скопирован в буфер обмена!');
  }).catch((err) => {
    console.error('Не удалось скопировать идентификатор:', err);
  });
};

popupButtonClose.addEventListener('click', () => closePopup());
copyButton.addEventListener('click', () => copyIdentifier());

const showPopup = (message, detailedMessage, identifier = null) => {
  popupMessage.textContent = message;
  popupDetailedMessage.textContent = detailedMessage;

  if (identifier) {
    identifierText.textContent = identifier;
    identifierBlock.style.display = 'flex';
  } else {
    identifierBlock.style.display = 'none';
  }

  popupOverlay.style.display = 'flex';
};

export { showPopup };
