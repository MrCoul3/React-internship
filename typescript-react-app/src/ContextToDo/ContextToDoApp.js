import React, {useContext} from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#ff0000',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            Я стилизован темой из контекста!
        </button>
    );
}
function Toolbar(props) {
    const color = props.color
    return (
      <div>
          <p style={{color: color}}>some test</p>
      </div>
    );
}
const data = {
    name: 'Coul',
    age: 22
}
const DataContext = React.createContext(data);
// console.log(DataContext._currentValue.name)

export default function ContextToDoApp() {

    const Test = (v) => {
        return <button style={{background: v.background}}>test</button>
    }
    return (
        <>
            <DataContext.Consumer>
                {val => <p>{val.name}</p>}
            </DataContext.Consumer>
            <ThemeContext.Consumer>
                {/*{value => <div>{console.log(value)}</div>}*/}
                {value => Test(value)}
            </ThemeContext.Consumer>

            <ThemeContext.Provider value={themes.light}>
                <Toolbar color={themes.light.background}/>
            </ThemeContext.Provider>
        </>
    );
}