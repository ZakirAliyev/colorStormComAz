import './index.scss';
import {FaChevronRight} from "react-icons/fa";
import {useGetAllBannersQuery} from "../../service/usersApi.jsx";
import {IMAGE_URL} from "../../constants.js";
import {useNavigate} from "react-router";

function Header() {
    const {data: getAllBanners} = useGetAllBannersQuery();
    const banners = getAllBanners?.data || [];

    const navigate = useNavigate();

    return (
        <section id="header">
            <div className="container">
                <div className="row">
                    {banners.slice(0, 3).map((banner, index) => (
                        <div className="col-4 col-md-6 col-sm-6 col-xs-12" key={banner?.id || index}>
                            <div className="box">
                                <div
                                    className="img"
                                    style={{backgroundImage: `url(${IMAGE_URL + banner?.imageName})`}}
                                >
                                    {banner?.link !== null ? (
                                        <>
                                            <button
                                                className="roundButton"
                                                onClick={() => {
                                                    window.location.href = banner?.link;
                                                }}
                                            >
                                                <FaChevronRight className="icon"/>
                                            </button>
                                            <div className="buttonWrapper">
                                                <h3>{banner?.title.substring(0, 20)} ...</h3>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="roundButton"
                                                style={{
                                                    visibility: 'hidden'
                                                }}
                                            >
                                                <FaChevronRight className="icon"/>
                                            </button>
                                            <div className="buttonWrapper">
                                                <h3>{banner?.title.substring(0, 20)} ...</h3>
                                            </div>
                                        </>
                                    )}
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
