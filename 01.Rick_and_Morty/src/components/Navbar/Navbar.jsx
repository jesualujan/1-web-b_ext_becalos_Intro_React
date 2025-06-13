import logo from '../../assets/react.svg'
import './style.css'

const Navbar = () => {
    return(
    <>
        {/* As a heading  */} 
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar__link">Rick and Morty</a>
        <div className="navbar__container-fluid">
            <img className="navbar__logo" src={logo} alt="logo_react"></img>
        </div>
        </nav>
    </>
    )
}

export default Navbar;

// snnipet: rafce