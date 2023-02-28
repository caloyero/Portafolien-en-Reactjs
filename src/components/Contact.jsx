import React from "react";

const Contact = () => {
    return (
        <section className="container-contact">
            <div className="container-contact-info">
                <h2 className="contact-info-title">Contact</h2>
            </div>
            <div className="contact-container-link">
                <div className="contac-link">
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/omar-perlaza-caicedo-446289238/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="contact-img" src={require("../images/linkedin.png")} alt="" />
                        <p>Linkeding</p>
                    </a>

                </div>
                <div className="contac-link">
                    <a
                        className="App-link"
                        href="https://github.com/caloyero?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="contact-img" src={require("../images/github (2).png")} alt="" />
                        <p>GitHub</p>
                    </a>
                </div>
                <div className="contac-link">
                    <a
                        className="App-link"
                        href="mailto:caliyero@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="contact-img" src={require("../images/gmail.png")} alt="" />
                        <p>Correo</p>
                    </a>

                </div>
                <div className="contac-link">
                    <a
                        className="App-link"
                        href="https://api.whatsapp.com/send?phone=573127472649&text=Hola%20Me%20Gustaría%20Reclutarte"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="contact-img" src={require("../images/llamada-telefonica.png")} alt="" />
                        <p>+57 3127472649 </p>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
