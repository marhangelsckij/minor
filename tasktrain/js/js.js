function Function() {
    document.getElementById("otvet_id").classList.toggle("show");
    var num = parseInt(document.getElementById("place").value);
    if (num % 2 !== 0 && num < 37 && num !== 0) {
        document.getElementById("text").innerHTML = "Нижняя полка (купе)";
    }
    else if (num % 2 == 0 && num < 37 && num !== 0) {
        document.getElementById("text").innerHTML = "Верхняя полка (купе)";
    }
    else if (num % 2 == 0 && num >= 37 && num <=54 && num !== 0) {
        document.getElementById("text").innerHTML = "Верхняя полка (боковая)";
    }
    else if (num % 2 !== 0 && num >= 37 && num <=54 && num !== 0) {
        document.getElementById("text").innerHTML = "Нижняя полка (боковая)";
    }
    else {
        document.getElementById("text").innerHTML = "Ошибка";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.search')) {
        
        var dropdowns = document.getElementsByClassName("otvet");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}