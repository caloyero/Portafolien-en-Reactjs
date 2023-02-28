import React from "react";

const WorkExperience = () => {
    return (
        <section className="container-workExperince">
            <div className="container-workExperince-text">
                <img className="images-me-secundary" src={require('../images/baloncesto.png')} />
                <h2 className="workExperince-text-title">Work experience</h2>
            </div>
            <div className="container-workExperince-card">
                <div className="workExperince-card">
                    <h3>cleanadsi.com</h3>
                    <img
                        alt=""
                        src={require("../images/cleanadsi.jpg")} />
                    <p>Ecommerce presented as a degree project, created in Laravel, my contributions were on the front end, shopping cart and payment gateway with PayPal.</p>
                </div>
                <div className="workExperince-card">
                    <h3>Social network Web</h3>
                    <img
                        alt=""
                        src={require("../images/redsocialweb.jpg")} />
                    <p>Social network created in Reac js using knowledge acquired in a Bootcamp given by Globant using other technologies such as Mysql for the modeling of the database Node js for the creation of APIS.</p>
                </div>
                <div className="workExperince-card">
                    <h3>Social network Movil</h3>
                    <img
                        alt=""
                        src={require("../images/redsocialmobil.jpg")} />
                    <p>This is the mobile version of the social network using React-Native in addition to the technologies already mentioned in the web version.</p>
                </div>
                <div className="workExperince-card">
                    <h3>API Rick and Morty</h3>
                    <img
                        alt=""
                        src={require("../images/rym.jpg")} />
                    <p>Consumption of Rick and Morty api to practice consumption of APIS</p>
                </div>
            </div>

        </section>
    )
};

export default WorkExperience;