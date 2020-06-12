import React from 'react';
import productdata from '../../variables/productdata';
import '../../assets/styles/ProductList.scss';

function ProductList() {
    const content = productdata.map((item, index) => {
        if (index % 5 === 4 && index != 0) {
            return (<div className="col-12 col-lg-8 p-0 m-0 d-flex justify-content-center align-items-center" key={index} >
                <img className="product-image" src={item} alt="In hộp giấy Tan A Chau" />
            </div>)
        } else {
            return (
                <div className="col-6 col-lg-4 p-0 m-0 d-flex justify-content-center align-items-center" key={index} >
                    <img className="product-image" src={item} alt="In hộp giấy Tan A Chau" />
                </div>
            )
        }

    })
    return (
        <div className="row mb-5">
            {content}
        </div>
    );
}

export default ProductList;
