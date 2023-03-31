let duck = {
    name: "Дональд",
    color: "белый",
    age: 1,
    toStr: function () {
        let str = "";
        str += duck.name + ", " + duck.color + ", " + duck.age + " год"
        return str
    },
    say: function () {
        let say = "кря кря";
        return say
    },
};

document.getElementById('task_4_1').innerHTML = duck.toStr();
document.getElementById('task_4_2').innerHTML = duck.say();
        
