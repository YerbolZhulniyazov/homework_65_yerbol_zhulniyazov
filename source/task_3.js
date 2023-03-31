guess();
function guess() {
    let number = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?')
    if (number === '5' || number === "пять") {
        text = "Ответ верный"
        alert(text);
        console.log(text);
    }
    else {
        text = "Ответ неверный"
        alert(text);
        console.log(text);

    }
}

document.getElementById('task_3').innerHTML = text;
