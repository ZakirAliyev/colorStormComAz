import './index.scss'
import Navbar from "../../components/Navbar/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Header from "../../components/Header/index.jsx";
import Lent from "../../components/Lent/index.jsx";
import Portfolio from "../../components/Portfolio/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import {useGetAllProductsQuery, useGetAllServiceQuery} from "../../service/usersApi.jsx";
import ServiceComponent from "../../components/ServiceComponent/index.jsx";
import Product from "../../components/Product/index.jsx";

function Home() {

    const {data: getAllProducts} = useGetAllProductsQuery()
    const products = getAllProducts?.data

    return (
        <section id={"home"}>
            <Navbar/>
            <Banner/>
            <Header/>
            <div style={{
                width: "100%",
                overflow: "hidden"
            }}>
                <Lent/>
            </div>
            <div className={"container"}>
                <h1>AZƏRBAYCANDA NÖMRƏ 1 BİZİK</h1>
            </div>
            <div id={"projects1"}>
                <Portfolio/>
            </div>
            <Footer/>
        </section>
    );
}

export default Home;