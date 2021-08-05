import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import Iter4 from "./Iter4"
import Iter5 from "./Iter5"
import Iter6 from "./Iter6";
import Iter7 from "./Iter7";



function App() {
    $(document).ready(()=>{

        let buttons = document.querySelectorAll('.buttons-container > button');
        let components = document.querySelectorAll('.components-container > div')
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                for (let btn of buttons) btn.classList.remove('button-active');
                $('.guide-text').addClass('guide-text-hide');
                components.forEach(component => {
                    component.classList.remove('visible');
                    if (component.getAttribute('name') == this.className) {
                        this.classList.add('button-active');
                        component.classList.add('visible');
                    }
                })
            })
        });
    })
  return (
      <div className={'app-main'}>
          <p className={'guide-text'}>click on the number...</p>
          <div className={'buttons-container'}>
              <button className={'iter4'}>4</button>
              <button className={'iter5'}>5</button>
              <button className={'iter6'}>6</button>
              <button className={'iter7'}>7</button>
          </div>
          <div className={'components-container'}>
              <div className={'component'} name={'iter4'}><Iter4 /></div>
              <div className={'component'} name={'iter5'}><Iter5 /></div>
              <div className={'component'} name={'iter6'}><Iter6 /></div>
              <div className={'component'} name={'iter7'}><Iter7 /></div>
          </div>
      </div>
  );
}

export default App;
