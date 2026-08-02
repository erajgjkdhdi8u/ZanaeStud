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

        preview.src=e.target.result;

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
