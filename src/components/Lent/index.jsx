import './index.scss';
import React, { useState, useEffect } from 'react';
import { useGetAllBrandsQuery } from "../../service/usersApi.jsx";
import { BRAND_URL } from "../../constants.js";

function Lent() {
    const { data: getAllBrands } = useGetAllBrandsQuery();
    const brands = getAllBrands?.data || [];

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (brands.length > 0) {
            setImages(brands.map((brand, index) => (
                <img
                    key={index}
                    src={BRAND_URL + brand.imageName}
                    alt={brand.name || "Brand Image"}
                />
            )));
        }
    }, [brands]);

    return (
        <section id="lent">
            <div className="scroll-container">
                <div className="scroll-content">
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                    {images}
                </div>
            </div>
        </section>
    );
}

export default Lent;
