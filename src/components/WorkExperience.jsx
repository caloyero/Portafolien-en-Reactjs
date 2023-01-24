import React from "react";

const WorkExperience = () => {
    return (
        <section className="container-workExperince">
            <div className="container-workExperince-text">
                <h2 className="workExperince-text-title">Work experience</h2>
            </div>
            <div className="container-workExperince-card">
                <di className="workExperince-card">
                    <h3>work</h3>
                    <img
                        alt=""
                        src={require("../images/imagen-de-codigo.jpg")} />
                    <p>El código anterior genera un bonito efecto en Chrome, pero que hay de ¿Firefox o IE? En esos navegadores solo vamos veremos un rectangulo con fondo degradado sin ningún texto (porque definimos color transparente). Para solucionarlo, utilizaremos el prefijo -webkit- para el degradado, así otros nevagadores ignorarán esa línea. También usaremos -webkit-text-fill-color que controla el color de relleno de los textos, evitando usar color: transparent (que lo reservaremos para otros navegadores). El texto siguiente se verá rojo en Firefox/IE:</p>
                </di>
                <di className="workExperince-card">
                    <h3>work</h3>
                    <img
                        alt=""
                        src={require("../images/imagen-de-codigo.jpg")} />
                    <p>El código anterior genera un bonito efecto en Chrome, pero que hay de ¿Firefox o IE? En esos navegadores solo vamos veremos un rectangulo con fondo degradado sin ningún texto (porque definimos color transparente). Para solucionarlo, utilizaremos el prefijo -webkit- para el degradado, así otros nevagadores ignorarán esa línea. También usaremos -webkit-text-fill-color que controla el color de relleno de los textos, evitando usar color: transparent (que lo reservaremos para otros navegadores). El texto siguiente se verá rojo en Firefox/IE:</p>
                </di>
                <di className="workExperince-card">
                    <h3>work</h3>
                    <img
                        alt=""
                        src={require("../images/imagen-de-codigo.jpg")} />
                    <p>El código anterior genera un bonito efecto en Chrome, pero que hay de ¿Firefox o IE? En esos navegadores solo vamos veremos un rectangulo con fondo degradado sin ningún texto (porque definimos color transparente). Para solucionarlo, utilizaremos el prefijo -webkit- para el degradado, así otros nevagadores ignorarán esa línea. También usaremos -webkit-text-fill-color que controla el color de relleno de los textos, evitando usar color: transparent (que lo reservaremos para otros navegadores). El texto siguiente se verá rojo en Firefox/IE:</p>
                </di>
                <di className="workExperince-card">
                    <h3>work</h3>
                    <img
                        alt=""
                        src={require("../images/imagen-de-codigo.jpg")} />
                    <p>El código anterior genera un bonito efecto en Chrome, pero que hay de ¿Firefox o IE? En esos navegadores solo vamos veremos un rectangulo con fondo degradado sin ningún texto (porque definimos color transparente). Para solucionarlo, utilizaremos el prefijo -webkit- para el degradado, así otros nevagadores ignorarán esa línea. También usaremos -webkit-text-fill-color que controla el color de relleno de los textos, evitando usar color: transparent (que lo reservaremos para otros navegadores). El texto siguiente se verá rojo en Firefox/IE:</p>
                </di>
            </div>

        </section>
    )
};

export default WorkExperience;