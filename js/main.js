const popup = document.getElementById('mainPopup');
const popupBtn = document.getElementById('popup__open');
const closePopupBtn = document.getElementById('closePopupBtn');
const overlay = document.querySelector('.overlay');

popupBtn.addEventListener('click', () => {
    popup.classList.add('show');
    popup.style.zIndex = "999";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.position = "absolute";
    document.body.style.overflowY = "hidden";
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    overlay.style.background = "transparent";
    overlay.style.position = "relative";
    document.body.style.overflowY = "visible";
});
