import './index.scss'
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import ServiceComponent from "../../components/ServiceComponent/index.jsx";
import Portfolio from "../../components/Portfolio/index.jsx";
import Product from "../../components/Product/index.jsx";
import {useGetAllProductsQuery} from "../../service/usersApi.jsx";

function ServicesPage() {

    const {data: getAllProducts} = useGetAllProductsQuery()
    const products = getAllProducts?.data

    return (
        <section id={"servicesPage"}>
            <Navbar/>
            <div className={"container"}>
                <ServiceComponent/>
                <div id={"projects1"}>
                    <Portfolio/>
                </div>
            </div>
            <div className={"container"}>
                <div className={"productText"}>çox alınan məhsullarımız</div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '75px'
                }}>
                    <div className={"productText1"}>Burada çox alınan məhsullarımız haqqında
                        açıqlama yazısı olacaq
                    </div>
                </div>
                <div className={"row"}>
                    {products && products.slice(0, 4).map((product, index) => (
                        <>
                            <Product product={product} key={index}/>
                            <Product product={product} key={index}/>
                            <Product product={product} key={index}/>
                            <Product product={product} key={index}/>
                        </>
                    ))}
                </div>
                <div className={"btnWrapper"}>
                    <button className={"btnbtn2"}>DAHA ÇOX</button>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default ServicesPage;