import './index.scss'
import AdminLeftBar from "../../components/AdminComponents/AdminLeftBar/index.jsx";
import Products from "../../components/AdminComponents/Products/index.jsx";
import {useLocation} from "react-router";
import Services from "../../components/AdminComponents/Services/index.jsx";
import image2 from "../../assets/bg.jpg";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useState} from "react";
import Brands from "../../components/AdminComponents/Brands/index.jsx";
import Categories from "../../components/AdminComponents/Categories/index.jsx";
import Banners from "../../components/AdminComponents/Banners/index.jsx";
import Orders from "../../components/AdminComponents/Orders/index.jsx";
import {IoMdLogOut} from "react-icons/io";
import {CiLogout} from "react-icons/ci";

function AdminPanel() {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    return (
        <section id="adminPanel">
            <AdminLeftBar/>
            <div className="wrapper">
                <div className="topClass">
                    <div className="profile">
                        <button onClick={toggleDropdown}>
                            {dropdownOpen ? <FaChevronUp/> : <FaChevronDown/>}
                        </button>
                        <span>Zakir Aliyev</span>
                        <img src={image2} alt="Profile"/>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <button>
                                    <CiLogout style={{
                                        color: 'red'
                                    }}/>
                                    <span style={{
                                        color: 'red'
                                    }}>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {location.pathname === "/cp/dashboard/products" ? (
                    <Products/>
                ) : location.pathname === "/cp/dashboard/services" ? (
                    <Services/>
                ) : location.pathname === "/cp/dashboard/brands" ? (
                    <Brands/>
                ) : location.pathname === "/cp/dashboard/categories" ? (
                    <Categories/>
                ) : location.pathname === "/cp/dashboard/banners" ? (
                    <Banners/>
                ) : location.pathname === "/cp/dashboard/orders" ? (
                    <Orders/>
                ) : null}
            </div>
        </section>
    );
}

export default AdminPanel;
