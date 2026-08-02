const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

// Загружаем сохранённое фото
const saved = localStorage.getItem("studentCard");

if(saved){

    preview.src = saved;

}

// Выбор нового фото

upload.addEventListener("change",()=>{

    const file = upload.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload=e=>{

        preview.style.opacity = "0";

setTimeout(() => {

    preview.src = e.target.result;

    preview.onload = () => {

        preview.style.opacity = "1";

    };

},150);

        localStorage.setItem(
            "studentCard",
            e.target.result
        );

    }

    reader.readAsDataURL(file);

});

// Полноэкранный просмотр

preview.onclick=()=>{

    if(preview.requestFullscreen){

        preview.requestFullscreen();

    }

}

// Поделиться

document.querySelector(".white").onclick=async()=>{

    if(!navigator.share){

        alert("Функция недоступна");

        return;

    }

    await navigator.share({

        title:"Студенческий билет"

    });

}
preview.addEventListener("dblclick",()=>{

    if(preview.style.transform=="scale(2)"){

        preview.style.transform="scale(1)";

    }else{

        preview.style.transform="scale(2)";

    }

});
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

// Открыть изображение
preview.addEventListener("click", () => {

    viewer.classList.add("show");

    viewerImg.src = preview.src;

});

// Закрыть
closeViewer.onclick = () => {

    viewer.classList.remove("show");

};

// Закрытие по нажатию на фон
viewer.onclick = (e) => {

    if(e.target === viewer){

        viewer.classList.remove("show");

    }

};
