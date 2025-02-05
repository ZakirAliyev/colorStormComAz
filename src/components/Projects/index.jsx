import './index.scss';
import {IoIosArrowRoundForward} from 'react-icons/io';
import {useNavigate} from "react-router";
import image1 from "/src/assets/bg.jpg"

function Projects() {

    const projects = [
        {id: 1, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 2, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 3, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 4, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 4, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 4, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 4, title: "COLORFEST", location: "Baku, Azerbaijan"},
        {id: 4, title: "COLORFEST", location: "Baku, Azerbaijan"},
    ];

    const navigate = useNavigate();

    const handleClick = (id) => {
        window.scrollTo(0, 0)
        navigate(`/events/${id}`)
    };

    return (
        <section id="projects">
            <div className="container">
                <h2>Başa vurduğumuz hayihələr</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="wp col-6 col-md-6 col-sm-12 col-xs-12">
                            <div className={`box ${index % 2 === 0 ? 'box1' : ''}`}>
                                <img src={image1} alt={"Image"}/>
                                <div className="layer"></div>
                            </div>
                            <div className={`textWrapper ${index % 2 !== 0 ? 'textWrapper1' : ''}`}>
                                <div className="text1">
                                    <h3>{project.title}</h3>
                                    <p>{project.location}</p>
                                </div>
                                <button onClick={() => handleClick(project.id)}>
                                    <span>DAHA ÇOX MƏLUMAT</span>
                                    <IoIosArrowRoundForward className="icon"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;