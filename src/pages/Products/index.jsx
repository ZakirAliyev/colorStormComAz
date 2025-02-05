import React, {useState} from "react";
import "./index.scss";
import Product from "../../components/Product/index.jsx";
import Navbar from "../../components/Navbar/index.jsx";
import image1 from "/src/assets/bg.jpg"
import Footer from "../../components/Footer/index.jsx";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("MONİTORLAR");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Navbar/>
            <section id={"products-1"}>
                <div className={"container"}>
                    <img src={image1} alt={"Image"} className={"bannerImage"}/>
                    <div className={"container1"}>
                        <div className={"row"}>
                            <div
                                className={`text col-4 col-md-4 col-xs-12 col-sm-12 ${
                                    selectedCategory === "MONİTORLAR" ? "selected" : ""
                                }`}
                                onClick={() => handleCategoryClick("MONİTORLAR")}
                            >
                                MONİTORLAR
                            </div>
                            <div
                                className={`text col-4 col-md-4 col-xs-12 col-sm-12 ${
                                    selectedCategory === "İŞIQLAR" ? "selected" : ""
                                }`}
                                onClick={() => handleCategoryClick("İŞIQLAR")}
                            >
                                İŞIQLAR
                            </div>
                            <div
                                className={`text col-4 col-md-4 col-xs-12 col-sm-12 ${
                                    selectedCategory === "SƏS SİSTEMLƏRİ" ? "selected" : ""
                                }`}
                                onClick={() => handleCategoryClick("SƏS SİSTEMLƏRİ")}
                            >
                                SƏS SİSTEMLƏRİ
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Products;