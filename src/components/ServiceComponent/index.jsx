import './index.scss'
import image1 from "/src/assets/bg.jpg"
import {useGetAllServiceQuery} from "../../service/usersApi.jsx";
import {useNavigate} from "react-router-dom";

function ServiceComponent() {

    const {data: getAllServices} = useGetAllServiceQuery()
    const services = getAllServices?.data
    const navigate = useNavigate()

    return (
        <div className={"container"} style={{
            marginBottom: '100px'
        }}>
            <section id={"serviceComponent"}>
                {services && services.map((service, index) => (
                    <div className={"wrapper"}>
                        {index % 2 === 0 ? (
                            <>
                                <img src={image1} alt="Image"/>
                                <div className={"textWrapper"}>
                                    <div className={"text"}>
                                        <h2>{service?.name}</h2>
                                        <h4>{service?.description}</h4>
                                    </div>
                                    <button onClick={() => {
                                        window.scrollTo(0, 0)
                                        navigate('/')
                                    }}>ƏLAQƏYƏ KEÇ
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={"textWrapper"}>
                                    <div className={"text"}>
                                        <h2>{service?.name}</h2>
                                        <h4>{service?.description}</h4>
                                    </div>
                                    <button onClick={() => {
                                        window.scrollTo(0, 0)
                                        navigate('/')
                                    }}>ƏLAQƏYƏ KEÇ
                                    </button>
                                </div>
                                <img src={image1} alt="Image"/>
                            </>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ServiceComponent;