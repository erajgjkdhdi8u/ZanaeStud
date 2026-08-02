const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

// Загрузка изображения
upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        preview.src = e.target.result;

    }

    reader.readAsDataURL(file);

});

// Просмотр на весь экран
preview.addEventListener("click", () => {

    if (preview.requestFullscreen) {
        preview.requestFullscreen();
    }

});

// Поделиться изображением
document.querySelector(".white").addEventListener("click", async () => {

    if (!navigator.share) {
        alert("Ваш браузер не поддерживает функцию «Поделиться».");
        return;
    }

    try{

        await navigator.share({
            title:"Студенческий билет",
            text:"Мой студенческий билет"
        });

    }catch(e){}

});
