import React, {useEffect, useState} from "react";
import "./index.scss";
import image1 from "../../assets/bg.jpg";
import {IoIosArrowRoundForward} from "react-icons/io";
import {useNavigate} from "react-router";

function Portfolio() {
    const [imageWidth, setImageWidth] = useState(0);

    const projects = [
        {id: 1, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 2, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 3, title: "COLORFEST", location: "Baku, Azerbaijan"},
    ];

    const updateImageWidth = () => {
        const imageElement = document.getElementsByClassName("wImage")[0];
        if (imageElement) {
            setImageWidth(imageElement.width);
            console.log("Image Width:", imageElement.width);
        }
    };

    useEffect(() => {
        updateImageWidth();
        window.addEventListener("resize", updateImageWidth);
        return () => {
            window.removeEventListener("resize", updateImageWidth);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <div className="container">
            <section id="portfolio">
                <div className="header">
                    <div className="wrapper">
                        <h2>PORTFOLİO</h2>
                        <button onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/portfolio');
                        }}>
                            <span>DAHA ÇOX</span>
                            <IoIosArrowRoundForward className="icon"/>
                        </button>
                    </div>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div key={index} className="wp col-4 col-md-12 col-sm-12 col-xs-12">
                                <div className={`box ${index % 2 === 0 ? "box1" : ""}`}>
                                    <img src={image1} alt="Image" className="wImage"/>
                                    <div className="layer"></div>
                                </div>
                                <div
                                    className="textWrapper textWrapper1"
                                    style={{width: `${imageWidth}px`}}
                                >
                                    <div className="text1">
                                        <h3>{project.title}</h3>
                                        <p>{project.location}</p>
                                    </div>
                                    <button onClick={() => {
                                        window.scrollTo(0, 0);
                                        navigate(`/events/${project?.id}`);
                                    }}>
                                        <span>DAHA ÇOX MƏLUMAT</span>
                                        <IoIosArrowRoundForward className="icon"/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
