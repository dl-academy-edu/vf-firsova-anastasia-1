var popup = document.querySelector('.popup');
var overlay = document.querySelector('.popup-overlay');
var popupButton = document.querySelector('.hero-button');
var popupCloseButton = popup.querySelector('.popup-button');
var input = popup.querySelector('.form-input')

popupButton.addEventListener('click', function(){
    popup.classList.add('open');
    overlay.classList.add('show');
    input.focus();
})

popupCloseButton.addEventListener('click', function(){
    popup.classList.remove('open');
    overlay.classList.remove('show');
})

window.addEventListener('keydown', function(evt){
    if (evt.code === "Escape") {
        if (popup.classList.contains('open')){
            popup.classList.remove('open');
            overlay.classList.remove('show');
        }
    }
})