import React from "react";
import Progress_bar from "./Progressbar";

const ToolsAndSkills = () => {
    return (
        <section className="container-tools">
            <div className="container-tools-text">
                <h2 className="tools-text-title">Tools and Skills</h2>
                <img className="images-me2" src={require('../images/me3.png')} />
            </div>
            <div className="container-tools-card">
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/html-5.png")}
                    />
                    <h1>HTML 5</h1>
                    {/* <Progress_bar bgcolor="orange" progress='80' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/css-3.png")}
                    />
                    <h1>CSS 3</h1>
                    {/* <Progress_bar bgcolor="aqua" progress='75' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/js.png")}
                    />
                    <h1>JAVASCRIPT</h1>
                    {/* <Progress_bar bgcolor="yellow" progress='80' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/java.png")}
                    />
                    <h1>JAVA</h1>
                    {/* <Progress_bar bgcolor="orange" progress='70' height={40} /> */}
                </div>
            </div>
            <div className="container-tools-card">
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/php.png")}
                    />
                    <h1>PHP</h1>
                    {/* <Progress_bar bgcolor="grey" progress='70' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/laravel.png")}
                    />
                    <h1>LARAVEL</h1>
                    {/* <Progress_bar bgcolor="red" progress='80' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/symfony.png")}
                    />
                    <h1>SYMFONY</h1>
                    {/* <Progress_bar bgcolor="SeaShell" progress='60' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/atom.png")}
                    />
                    <h1>REACT</h1>
                    {/* <Progress_bar bgcolor="CornflowerBlue" progress='80' height={40} /> */}
                </div>

            </div>
            <div className="container-tools-card">
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/nuclear.png")}
                    />
                    <h1>REACT-NATIVE</h1>
                    {/* <Progress_bar bgcolor="CornflowerBlue" progress='80' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/github.png")}
                    />
                    <h1>GITHUB</h1>
                    {/* <Progress_bar bgcolor="DarkGray" progress='70' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/node-js.png")}
                    />
                    <h1>NODE JS</h1>
                    {/* <Progress_bar bgcolor="DarkSeaGreen" progress='60' height={40} /> */}
                </div>
                <div className="tools-card">
                    <img
                        alt=""
                        src={require("../images/mysql.png")}
                    />
                    <h1>MYSQL</h1>
                    {/* <Progress_bar bgcolor="DarkOliveGreen" progress='70' height={40} /> */}
                </div>

            </div>
        </section>
    )
};

export default ToolsAndSkills;