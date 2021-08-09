import $ from "jquery";
import "./Iter4.css";

function Iter4() {

    let paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum enim, fugit nesciunt nihil officia quis rerum soluta tempora. Impedit labore perspiciatis qui sequi? Alias maxime porro possimus quia ut?";
    $(document).ready(() => {
        let rect = document.querySelector('.rectangle');
        console.log(rect);

        let inputs = document.querySelectorAll('.wrapper > input');
        let link = document.querySelector('.prev-def-link');

        rect.addEventListener('mouseover', function () {
            this.classList.add('rectangle-color');
        })

        rect.addEventListener('click', function () {
            this.classList.toggle('rectangle-scale');

        })


        rect.addEventListener('mouseout', function () {
            this.classList.remove('rectangle-color');
        })

        for (let input of inputs) {

            input.addEventListener('focus', function () {
                this.classList.add('input-focus')
            });

            input.addEventListener('blur',  () => {
                input.classList.remove('input-focus');
            })
        }

        link.addEventListener('click', function (e) {
            e.preventDefault();
        })


        function contentAdder() {
            let textFrame = document.querySelector('.text-frame');

            let pTag = document.createElement("p");
            pTag.innerHTML = paragraph;
            textFrame.append(pTag);
        }

        function contentDeleter() {
            let pTags = document.getElementsByTagName('p');
            for (let pTag of pTags) {
                pTag.remove();
            }
        }
        $('.add').click(()=>contentAdder())
        $('.del').click(()=>contentDeleter())
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



    });
    return (
        <div className={'iter4'}>
            <div className="wrapper">
                <input className="first" type="number" placeholder="enter first number"/>
                    <input className="second" type="number" placeholder="enter second number"/>
                        <div className="result">=</div>
            </div>

            <div className="grid-wrapper">
                <button className="btn" value="+">+</button>
                <button className="btn" value="-">-</button>
                <button className="btn" value="*">*</button>
                <button className="btn" value="/">/</button>
                <button className="btn" value="**">**</button>
                <button className="btn" value="%">%</button>
            </div>

            <div className="bool-res"/>

            <a className={'prev-def-link'} href="">Reload Prevent Default</a>

            <div className="rectangle">Click Me</div>

            <div className="text-frame">
                <div className="flex-box" style={{display: "flex", justifyContent: 'space-evenly', width: "260px"}}>
                    <button className="add">Add Content</button>
                    <button className="del">Del Content</button>
                </div>
                <p>{paragraph}
                </p>

            </div>
        </div>
    );
}
export default Iter4