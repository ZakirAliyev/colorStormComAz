import './index.scss';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import image1 from "/src/assets/bg.jpg";

function Product() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bx col-3 col-md-6 col-sm-6 col-xs-6">
            <section id="product">
                <img src={image1} alt="Product" />
                <div className="wrapper">
                    <div className="textWrapper">
                        <h2>Kateqoriya</h2>
                        <h3>PRODUCT NAME</h3>
                    </div>
                    <button onClick={showModal}>MƏHSULU İNCƏLƏ</button>
                </div>
            </section>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                className="custom-modal"
                width={1000}
            >
                <div className="modal-content">
                    <img src={image1} alt="Modal" />
                    <div className="modal-text">
                        <div>
                            <h2>Kateqoriya</h2>
                            <h3>MƏHSUL ADI</h3>
                            <p>
                                Bu məhsul haqqında daha çox məlumat əldə etmək üçün bizimlə əlaqə saxlayın.
                                Keyfiyyətli və ən yaxşı qiymətlər bizdədir!
                            </p>
                        </div>
                        <div className="modal-buttons">
                            <Button type="primary" onClick={() => alert('Sifariş Edildi')}>
                                SİFARİŞ ET
                            </Button>
                            <Button type="default" onClick={() => alert('Əlaqə Keçildi')}>
                                ƏLAQƏYƏ KEÇ
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Product;