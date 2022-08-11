import {Link}                       from "react-router-dom";
import iconoSoil                    from 'media/icon_Soil.png';

const Header = () => {
    return (
        <header>
        <ul className="navbar">
            <li>
                <Link to='/'>
                    <img src={iconoSoil} alt="imagen" className="logo" />
                </Link>
            </li>
            <li>
                <Link to='/agronomia'>
                    <button className="mainButton">Agronomia</button>
                </Link> 
            </li>
            <li>
                <Link to='/abonos'>
                    <button className="mainButton">Abonos organicos</button> 
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <button className="mainButton">Ingresar</button> 
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <button className="mainButton">Registrase</button> 
                </Link>                        
            </li>
            <li>
                <div className="buscar" className="iconoBusqueda">
                    <input placeholder="Buscar pagina"/>
                    <i className="fa-brands fa-searchengin"></i>
                </div>
            </li>
        </ul>

    </header>
    )
}
export default Header;