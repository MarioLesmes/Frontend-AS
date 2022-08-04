import './styles/styles.css';
import canaPanelera from './media/cañaPanelera.jpg';
import ceniClima from './media/ceniclima.jpeg';
import iconoSoil from './media/icon_Soil.png';
import georeferenciacion from './media/georeferenciacion.jpg';

function App() {
  return (
    <div className="App">
        <header>
            <ul className="navbar">
                <li>
                    <img src={iconoSoil} alt="imagen" className="logo" />
                </li>
                <li>
                    <button className="mainButton">Agronomia</button> 
                </li>
                <li>
                    <button className="mainButton">Abonos organicos</button> 
                </li>
                <li>
                    <button className="mainButton">Ingresar</button> 
                </li>
                <li>
                    <button className="mainButton">Registrase</button> 
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
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={canaPanelera} alt="Caña Panelera"/>
                        </div>
                        <span className="breedTitle">
                            Recomendaciones Tecnicas
                            
                        </span>
                    </li>
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={ceniClima} alt="Muestra de suelos"/>
                        </div>
                        <span className="breedTitle">
                            Toma de muestra de suelos
                        </span>
                    </li>
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={georeferenciacion} alt="Georeferenciacion predios"/>
                        </div>
                        <span className="breedTitle">
                            Georeferenciacion de predios
                        </span>
                    </li>
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
  );
}

export default App;
