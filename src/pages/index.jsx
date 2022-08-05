import CardServiciosOfrecidos       from 'components/CardServiciosOfrecidos.jsx'
import canaPanelera                 from 'media/cañaPanelera.jpg';
import ceniClima                    from 'media/ceniclima.jpeg';
import iconoSoil                    from 'media/icon_Soil.png';
import georeferenciacion            from 'media/georeferenciacion.jpg';
import {Link}                       from "react-router-dom";

function Index(){
    return (
    <div>
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
        <main>
            <section>
                <center className="mainTitle"> Servicios ofrecidos </center>
                <ul className="breedCardContainer">
                    <CardServiciosOfrecidos imagen={canaPanelera}       alt='Caña Panelera'             servicio='Recomedaciones Tecnicas' />
                    <CardServiciosOfrecidos imagen={ceniClima}          alt='Muestra de suelos'         servicio="Toma de muestra de suelos"/>
                    <CardServiciosOfrecidos imagen={georeferenciacion}  alt='Georeferenciacion predios' servicio="Georeferenciacion"/>
                </ul>
            </section>
        </main>    
        <footer>
            <ul className="footer-menu container-fluid navbar">
                <p> CONTACTO. 
                    Mario Yesid Lesmes Fernandez
  
                    Ingeniero Agricola. Universidad Nacional de Colombia.

                    Cel. 3132572634 
                    Correo Electronico: ingmariolesmes@gmail.com
                </p>                    
            </ul>
        </footer>
    </div>
    )
}

export default Index;