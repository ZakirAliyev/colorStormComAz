import './index.scss'
import {BsFillTelephoneFill} from "react-icons/bs";
import {IoMdMail} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar/index.jsx";
import Footer from "../../components/Footer/index.jsx";
// import {useFormik} from 'formik';
// import {usePostContactSendMutation} from "../../services/usersApi.jsx";
// import Swal from "sweetalert2";

function Contact() {

    // const [postContactSend] = usePostContactSendMutation()
    //
    // const formik = useFormik({
    //     initialValues: {
    //         fullName: '',
    //         title: '',
    //         email: '',
    //         message: '',
    //     },
    //     onSubmit: async (values, {resetForm}) => {
    //         try {
    //             const response = await postContactSend(values).unwrap()
    //
    //             if (response?.statusCode === 200) {
    //                 await Swal.fire({
    //                     position: "center",
    //                     icon: "success",
    //                     title: "Mesaj göndərildi!",
    //                     showConfirmButton: false,
    //                     timer: 1500,
    //                 });
    //                 resetForm()
    //             }
    //         } catch (error) {
    //             await Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: "Xəta baş verdi!",
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             });
    //         }
    //     },
    // });

    return (
        <>
            <Navbar/>
            <section id={"contact"}>
                <Helmet>
                    <title>Əlaqə</title>
                </Helmet>
                <div className={"container"}>
                    <h2 className={"h2h2"}>Əlaqə</h2>
                    <div className={"lineWrapper"}>
                        <div className={"greenLine"}></div>
                    </div>
                    <p>Ana səhifə / Əlaqə</p>
                    <div className={"row"} style={{
                        marginTop: '50px',
                    }}>
                        <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <BsFillTelephoneFill className={"icon"}/>
                                <div>
                                    <a href={"tel:+994557519845"}>
                                        +994 (12) 345-67-89
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <IoMdMail className={"icon"}/>
                                <div>
                                    <a href={"mailto:info@colorstorm.com.az"}>
                                        info@colorstorm.com.az
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <MdLocationOn className={"icon"}/>
                                <div>
                                    <a href={"https://maps.app.goo.gl/o6HjCBSgFgZLt1sh7"} target={"_blank"}>
                                        46B Aşıq Molla Cümə, Bakı 1000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"} style={{
                        marginTop: '20px'
                    }}>
                        <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <form
                                // onSubmit={formik.handleSubmit}
                            >
                                <h2>Mesaj formu</h2>
                                <input
                                    required
                                    placeholder={"Ad, soyad *"}
                                    name={"fullName"}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.firstName}
                                />
                                <input
                                    required
                                    placeholder={"Mətn *"}
                                    name={"title"}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.firstName}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder={"E-mail *"}
                                    name={"email"}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.firstName}
                                />
                                <textarea
                                    required
                                    placeholder={"Mesaj *"}
                                    name={"message"}
                                    rows={5}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.firstName}
                                />
                                <button type={"submit"}>Göndər</button>
                            </form>
                        </div>
                        <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.86840541612614!2d49.85816042501378!3d40.41118818131678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1738421750701!5m2!1saz!2saz"
                                style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;