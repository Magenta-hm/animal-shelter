
/*========================СКРИПТ ДЛЯ ПОПАПОВ "ИНФО О ПИТОМЦЕ" ========================*/
var link1 = document.querySelector(".jennifer-button-js");
var link2 = document.querySelector(".charly-button-js");
var popup = document.querySelector(".modal-content-pets");
var close = popup.querySelector(".modal-content-close");
var img = popup.getElementsByTagName('img')[0];
var ul = document.querySelector(".pet-details-items");
var petName = document.querySelector(".modal-pet-title");
var petPooch = document.querySelector(".modal-pet-subtitle");
var petInfo = document.querySelector(".modal-pet-paragraph");

link1.addEventListener("click", function (evt) {
    evt.preventDefault();
    img.src = "img/inner-dog1.jpg";
    img.width = "343";
    img.height = "465";
    ul.innerHTML = "<li><span><b>Age:</b> 2 months</span></li> <li><span><b>Inoculations:</b> none</span></li> <li><span><b>Diseases:</b> none</span></li> <li><span><b>Parasites:</b> none</span></li>";
    petName.innerHTML = "Jennifer";
    petPooch.innerHTML = "Pooch - Labrador";
    petInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.";
    popup.classList.add("modal-popup-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-popup-show");
});

link2.addEventListener("click", function (evt) {
    evt.preventDefault();
    img.src = "img/inner-dog2.jpg";
    img.width = "470";
    img.height = "470";
    ul.innerHTML = "<li><span><b>Age:</b> 4 months</span></li> <li><span><b>Inoculations:</b> none</span></li> <li><span><b>Diseases:</b> none</span></li> <li><span><b>Parasites:</b> none</span></li>";
    petName.innerHTML = "Charly";
    petPooch.innerHTML = "Pooch - Unknown";
    petInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum.";
    popup.classList.add("modal-popup-show");
});



window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-popup-show")) {
            popup.classList.remove("modal-popup-show");
        }
    }
});
