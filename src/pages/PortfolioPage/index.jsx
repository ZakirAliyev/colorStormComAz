import './index.scss'
import Navbar from "../../components/Navbar/index.jsx";
import Projects from "../../components/Projects/index.jsx";
import Footer from "../../components/Footer/index.jsx";

function PortfolioPage() {
    return (
        <>
            <section id={"portfolioPage"}>
                <Navbar/>
                <Projects/>
            </section>
            <Footer/>
        </>
    );
}

export default PortfolioPage;