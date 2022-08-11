import CardServiciosOfrecidos       from 'components/CardServiciosOfrecidos.jsx'
import canaPanelera                 from 'media/cañaPanelera.jpg';
import ceniClima                    from 'media/ceniclima.jpeg';
import georeferenciacion            from 'media/georeferenciacion.jpg'; 
function Index(){
    return (
                <section>
                    <center className="mainTitle"> Servicios ofrecidos </center>
                    <ul className="breedCardContainer">
                        <CardServiciosOfrecidos imagen={canaPanelera}       alt='Caña Panelera'             servicio='Recomedaciones Tecnicas' />
                        <CardServiciosOfrecidos imagen={ceniClima}          alt='Muestra de suelos'         servicio="Toma de muestra de suelos"/>
                        <CardServiciosOfrecidos imagen={georeferenciacion}  alt='Georeferenciacion predios' servicio="Georeferenciacion"/>
                    </ul>
                </section>
    )
}

export default Index;