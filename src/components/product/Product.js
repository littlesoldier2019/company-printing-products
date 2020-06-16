import React from 'react';
import SubHero from '../share-compoments/SubHero';
import ProductList from './ProductList';
import ProductSide from './ProductSide';
import Image from '../../assets/images/product.jpg';

function Product() {
    return (
        <>
            <SubHero image={Image} title1="Độ màu chuẩn xác" title2="đường in sắc nét"/>
            <div className="container-fluid">
                <div className="row p-0 p-md-3 p-lg-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <ProductSide />
                    </div>
                    <div className="col-12 col-lg-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
