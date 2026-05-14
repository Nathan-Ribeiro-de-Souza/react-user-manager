
 function ThemeButton(props){
  return(
    <button className="themeButton" onClick={props.tema}>{props.theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
)
}

export default ThemeButton