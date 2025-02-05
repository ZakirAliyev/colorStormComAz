import './index.scss';
import {FaChevronRight} from "react-icons/fa";
import {useGetAllBannersQuery} from "../../service/usersApi.jsx";
import {IMAGE_URL} from "../../constants.js";
import {useNavigate} from "react-router";

function Header() {
    const {data: getAllBanners} = useGetAllBannersQuery();
    const banners = getAllBanners?.data || [];

    return (
        <section id="header">
            <div className="container">
                <div className="row">
                    {banners.map((banner, index) => (
                        <div className="col-4 col-md-6 col-sm-6 col-xs-12" key={banner?.id || index} onClick={() => {
                            window.location.href = banner?.link;
                        }}>
                            <div className="box">
                                <div
                                    className="img"
                                    style={{backgroundImage: `url(${IMAGE_URL + banner?.imageName})`}}
                                >
                                    <button className="roundButton">
                                        <FaChevronRight className="icon"/>
                                    </button>
                                    <div className="buttonWrapper">
                                        <h3>{banner?.title}</h3>
                                    </div>
                                </div>
                                <div className="layer"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Header;
