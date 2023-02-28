import React from "react";
import "../css/style.css";

const Precentation = () => {
    return (
        <section >

            <div className="container-precentation-background">
                <h1 className="  precentation-text-title">Hi I'm Omar Perlaza</h1>
            </div>

            <div className="container-precentation-text">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <img className="images-me" src={require('../images/me.png')} />
                <h1 className=" precentation-text">This is My Portfolio</h1>
            </div>
        </section>
    )
};

export default Precentation;