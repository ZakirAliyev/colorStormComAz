import './index.scss'
import image1 from "/src/assets/logoWhite.png"
import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";

function About() {
    return (
        <>
            <Navbar/>
            <section id={"about"}>
                <Helmet>
                    <title>Haqqımızda</title>
                </Helmet>
                <div className="container">
                    <h2 className={"h2"}>Haqqımızda</h2>
                    <div className={"lineWrapper"}>
                        <div className={"greenLine"}></div>
                    </div>
                    <p className={"p"}>Ana səhifə / Haqqımızda</p>
                    <div className={"row"}>
                        <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <h2>Şirkət haqqında</h2>
                            <p>Şirkətimiz, ofisinizin gündəlik təchizatı üçün zəruri olan dəftərxana ləvazimatlarının,
                                su,
                                çay, kofe kimi daimi istifadə edilən qida məhsullarının, gigiyena və təmizlik
                                vasitələrinin,
                                daşınan və daşınmaz hər növ inventarın (ofis mebel dəstləri, kompyuter və onun yan
                                avadanlıqları) Sizə sürətli və maneəsiz çatdırılması xidmətini həyata keçirir.
                            </p>
                            <p>
                                Xidmətlərimizdən istifadə etməklə Siz;
                            </p>
                            <ul>
                                <li>vaxtınıza qənaət etmiş olursunuz,</li>
                                <li>
                                    sifariş etmədən öncə qiymətlərlə tanış ola, qiymət müqaisəsini rahatlıqla edə
                                    bilirsiniz,
                                </li>
                                <li>
                                    sifarişlərinizi həm nəğd, həm də köçürmə yolu ilə həyata keçirə bilirsiniz,
                                </li>
                                <li>
                                    əməkdaşlarınızın ancaq işlərinə vaxt sərf etməsinə zəmin yaradırsınız,
                                </li>
                                <li>
                                    əlavə xərclərdən (taksi, park yeri, park cərimələri və s.) azad olursunuz.
                                </li>
                            </ul>
                            <p>
                                Bizimlə əməkdaşlıq etdiyiniz təqdirdə, bütün xidmətlərin yüksək sürət və həssasiyyətlə
                                həyata keçiriləcəyinə təminat veririk.
                            </p>
                        </div>
                        <div className={"col-6 col-md-6 col-sm-12 col-xs-12 box"}>
                            <img src={image1} alt={"Image"}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default About;