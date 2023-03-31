let myList = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (let i = 0; i < myList.length; i++) {
    if (myList[i] === 'молоко') {
        answer = 'хорошо';
    }
    else {
        answer = 'плохо';
    }
    document.getElementById('task_1').innerHTML += answer + '<br>';
}

