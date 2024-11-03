function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    
    console.log(a)
    if (a % 2 !== 0 && a < 37 && a !== 0) {
        result = "Нижняя полка (купе)";
        check = true;
    }
    else if (a % 2 == 0 && a < 37 && a !== 0) {
        result = "Верхняя полка (купе)";
        check = true;
    }
    else if (a % 2 == 0 && a >= 37 && a <=54 && a !== 0) {
        result = "Верхняя полка (боковая)";
        check = true;
    }
    else if (a % 2 !== 0 && a >= 37 && a <=54 && a !== 0) {
        result = "Нижняя полка (боковая)";
        check = true;
    }
    else {
        result = "Ошибка";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
