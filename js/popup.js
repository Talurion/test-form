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
  copyButton.textContent = 'Копировать';
  copyButton.style.backgroundColor = '';
  copyButton.style.cursor = 'pointer';
  copyButton.disabled = false;
};

const copyIdentifier = () => {
  const newIdentifier = identifierBlock.querySelector('.identifierText').textContent;

  navigator.clipboard.writeText(newIdentifier).then(() => {
    copyButton.textContent = 'Скопировано';
    copyButton.style.backgroundColor = '#ccc';
    copyButton.style.cursor = 'not-allowed';
    copyButton.disabled = true;
    popupDetailedMessage.textContent = 'Идентификатор успешно скопирован';
  }).catch(() => {
    popupDetailedMessage.textContent = 'Ошибка, скопируйте идентификатор вручную';
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
