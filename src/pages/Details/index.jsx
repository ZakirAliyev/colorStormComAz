import './index.scss'
import Navbar from "../../components/Navbar/index.jsx";
import image1 from "/src/assets/bg.jpg"
import {IoIosArrowRoundForward} from "react-icons/io";
import Footer from "../../components/Footer/index.jsx";

function Details() {

    return (
        <>
            <Navbar/>
            <div className={"container"}>
                <section id={"details"}>
                    <button className={"button"} onClick={async () => {
                        await window.history.back()
                    }}>
                        <IoIosArrowRoundForward className={"icon"}/>
                    </button>
                    <div className={"box"}>
                        <img src={image1} alt={"Image"}/>
                        <div className={"layer"}></div>
                    </div>
                    <div className={"textWrapper"}>
                        <h2>COLOR FEST</h2>
                        <div className={"line"}></div>
                    </div>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going
                        at the beginning of the day. The writer has no idea what topic the random paragraph will be
                        about when it appears. This forces the writer to use creativity to complete one of three common
                        writing challenges. The writer can use the paragraph as the first one of a short story and build
                        upon it. A second option is to use the random paragraph somewhere in a short story they create.
                        The third option is to have the random paragraph be the ending paragraph in a short story. No
                        matter which of these challenges is undertaken, the writer is forced to use creativity to
                        incorporate the paragraph into their writing.
                    </p>
                    <div className={"textWrapper"}>
                        <div className={"line"}></div>
                        <button>Contact us</button>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Details;