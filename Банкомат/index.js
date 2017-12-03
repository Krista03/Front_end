// objects
var arrObj = [
    {
        "name": "Пинчук Оксана",
        "pincod": 1111,
        "balans": "1000$",
        "t": [{
            "d": "20:09:16, 30.11.2017",
            "sum": 90
        },
            {
                "d": "20:09:16, 30.11.2017",
                "sum": 30
            }]
    },
    {
        "name": "Виноградов Максим",
        "pincod": 2222,
        "balans": "1000$",
        "t": [{
            "d": "20:09:16, 30.11.2017",
            "sum": 80
        },
            {
                "d": "20:09:16, 30.11.2017",
                "sum": 20
            }]

    },
    {
        "name": "Сладкова Ольга",
        "pincod": 3333,
        "balans": "1000$",
        "t": [{
            "d": "20:09:16, 30.11.2017",
            "sum": 70
        },
            {
                "d": "20:09:16, 30.11.2017",
                "sum": 110
            }]
    },
    {
        "name": "Драган Роман",
        "pincod": 4444,
        "balans": "1000$",
        "t": [{
            "d": "20:09:16, 30.11.2017",
            "sum": 120
        },
            {
                "d": "20:09:16, 30.11.2017",
                "sum": 60
            }]
    },
    {
        "name": "Пинчук Валентина",
        "pincod": 5555,
        "balans": "10000$",
        "t": [{
            "d": "20:09:16, 30.11.2017",
            "sum": 10
        },
            {
                "d": "20:09:16, 30.11.2017",
                "sum": 115
            }]
    }
];


// Вывод в табл  последнии транзакции.

// Кнопка Restart
function BtnRestart() {
    var BtnRestart = document.getElementById("res");
    BtnRestart.addEventListener("click", function (e) {
        document.location.reload();
    })
}

// Кнопка Close
function close() {
    var cls = document.querySelector(".close");
    cls.addEventListener("click", function (e) {
        f2.style.display = "none";
        f1.style.display = "flex";
        err.style.display = "none";
        f1.style.display = ""
    })
}

close();

// проверка пароля кнопка ОК для form1
function objectUser() {
    for (var j = 0; j < arrObj.length; j++)
        if (+pin.value === arrObj[j].pincod) {
            f2.style.display = "flex";
            f1.style.display = "none";
            pin.value = '';
            str = "";
            document.querySelector("#sum").focus();
            document.querySelector("#res").innerHTML = arrObj[j].name;
            document.querySelector("#balans").innerHTML = arrObj[j].balans;
            var td = document.querySelectorAll("td");
            td[0].innerHTML = arrObj[j].t[0].sum;
            td[2].innerHTML = arrObj[j].t[1].sum;
            td[1].innerHTML = arrObj[j].t[0].d;
            td[3].innerHTML = arrObj[j].t[1].d;

        }
        else {
            document.querySelector("#err").style.display = "block";
        }
}

// Содержимое кнопок для form1 , form2
var buttons = document.querySelectorAll("#num_button>button");
var pin = document.querySelector("#pin");
var sum = document.querySelector("#sum");
var str = "";
var f1 = document.querySelector(".forms");
var f2 = document.querySelector(".forms2");
var err = document.querySelector("#err");
for (var i = 0; i < buttons.length; i++) {
    addEvent(buttons[i]);
}

function addEvent(button) {
    button.addEventListener('click', event);

    function event() {
        var type = button.getAttribute('data-type')
        if (f1.style.display == "") {
            if (type === 'ok') {
                objectUser();
            } else if (type === 'del') {
                str = '';
                err.style.display = "none";
            } else {
                str += type;
            }
            pin.value = str;
        } else if (f2.style.display == "flex") {
            if (type === 'ok') {
                balans();
                sum.value = '';
                str = "";
            } else if (type === 'del') {
                str = '';
                err.style.display = "none";
            } else {
                str += type;
            }
            sum.value = str;
            console.log(pin.value)

        }
    }
}

function showTime() {
    var ld = new Date();
    var d = ld.toLocaleDateString();
    var t = ld.toLocaleTimeString();
    var out = t + ", " + d;
    return out;
}

showTime();
// balans
function balans() {
    var s = parseInt(sum.value);
    var b = document.querySelector("#balans");
    if (isNaN(s) || s === "") {
        alert("Укажите сумму");
    } else {
        var arr = [];

        var td = document.querySelectorAll("td");
        var time = showTime();
        for (var j = 0; j < arrObj.length; j++) {
            var blns = parseInt(arrObj[j].balans);
            arr.push(blns);
            if ((document.querySelector("#res").innerHTML) === arrObj[j].name) {
                arr[j] -= s;
                b.innerHTML = arr[j] + "$";
                arrObj[j].balans = b.innerHTML;

                arrObj[j].t[1] = arrObj[j].t[0];

                td[2].innerHTML = arrObj[j].t[1].sum;
                td[3].innerHTML = arrObj[j].t[1].d;
                arrObj[j].t[0].d = time;
                arrObj[j].t[0].sum = s;
                td[0].innerHTML = arrObj[j].t[1].sum;
                td[1].innerHTML = arrObj[j].t[1].d;
            }
        }
    }
}


