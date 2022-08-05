function CardServiciosOfrecidos({imagen, alt, servicio, color}) {
    return(
        <li className="breedCard">
        <div className="contenedorImagen">
            <img src={imagen} alt={alt}/>
        </div>
        <span className="breedTitle">
            {servicio}
        </span>
    </li>
    )
}
export default CardServiciosOfrecidos;