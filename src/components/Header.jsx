import ThemeButton from "./ThemeButton"

function Header(props){
  return(
    <header className="header">

   <div className="header-content">
  <h1>Users Manager</h1>
  <p>Manage your users easily</p>
  </div>
  
  <ThemeButton
  tema={props.tema}
  theme={props.theme} />
  
    

  
  </header>)
}
export default Header