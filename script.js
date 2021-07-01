let buttons = document.querySelectorAll('.btn');
let result = document.querySelector(".result");
let firstVal = document.querySelector(".first");
let secondVal = document.querySelector(".second");
let boolRes = document.querySelector('.bool-res');
let test;
let bool = false;
let bool2 = false;

for (let btn of buttons) {
    btn.addEventListener("click", function (){
        let symbol = this.getAttribute("value");
        let res = eval(`${firstVal.value}${symbol}${secondVal.value}`);
        result.innerHTML = '= ' + res;
        console.log('результат равен ' + res);

        if (res != 10 && (res == 0 || res >= 20)  ) {
            bool = true;
            boolRes.innerHTML = ' не равен 10, равно 0 или больше 20';
        }

        if (res < 0) {
            boolRes.innerHTML = 'меньше 0';
            bool2 = true;
        }

        console.log(bool)
        console.log(bool2)


        test = `test ${bool ? 'true' : 
            `вложенный шаблон ${bool2 ? 'меньше нуля' : 'больше нуля'}`}`;
        console.log(test)

    });
}

console.log("I\'m \"shielded\"");

let x = 14;
if (x >=14 && x <=90) {
    console.log(x + ' находится в диапазоне от 14 до 90 включительно')
}

let y = 10;
if (!(y >= 14) || !(y <= 90)) {
    console.log(y + ' не входит в диапазон от 14 до 90')
}
let z = 11
if (z < 14 || z > 90) {
    console.log(z + ' не входит в диапазон от 14 до 90')
}

let someData = '{"name": "John","age": 30, "gender": "male"}'

function catchError() {
    try {
        let decodeData = JSON.parse(someData);

        if (!decodeData.name) {
            throw new SyntaxError("нет данных по name")
        }

        if (!decodeData.gender) {
            throw new SyntaxError("нет данных по gender");
        }

        someVar;
        console.log(someVar);

    } catch (err) {
        if (err.name == 'SyntaxError') {
            console.log("JSON error: " + err.message)
        } else {
            throw err;
        }
    } finally {
        console.log('finally')
    }
}

try {
    catchError()
} catch (err) {
    console.log("проброс исключения " + err);
}


