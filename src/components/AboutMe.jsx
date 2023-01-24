import React from "react";

const AboutMe = () => {

    return (
        <section className="container-aboutMe">
            <div className="container-aboutMe-text">
                <h2 className="aboutMe-text-title">About me</h2>
            </div>
            <div className="container-aboutMe-info">
                <p>Para que el texto funcione como máscara usamos -webkit-background-clip: text (solo funciona en navegadores basados en webkit como Chrome o Safari). Al hacerlo, solo vemos el texto (con el color elegido) pero no el degradado; esto ocurre porque el color del texto oculta el fondo. Añadiendo color: transparent podremos ver el degradado.
                    Texto con color degradado</p>
            </div>
        </section>
    )
};

export default AboutMe;