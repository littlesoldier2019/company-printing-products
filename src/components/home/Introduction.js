import React from 'react';
import Icon1 from '../../assets/images/icon3.png';
import Icon2 from '../../assets/images/icon4.jpg';
import Icon3 from '../../assets/images/icon5.jpg';
import Icon4 from '../../assets/images/icon6.png';

function Introduction() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center m-auto mb-sm-1 mb-md-3 mb-lg-5">Dịch vụ in ấn thiết kế cao cấp</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <img src={Icon1} className="img-fluid" alt="in nhanh Tân Á Châu" />
                    <p className="text-center">In trên mọi chất liệu. Luôn cập nhật những mẫu giấy cao cấp nhất.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <img src={Icon2} className="img-fluid" alt="in nhanh Tân Á Châu" />
                    <p className="text-center">Công nghệ in tiên tiến đạt chuẩn FSC và tiêu chuẩn xuất khẩu</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <img src={Icon3} className="img-fluid" alt="in nhanh Tân Á Châu" />
                    <p className="text-center">Màu sắc chuẩn xác theo thiết kế được các thương hiệu lớn tin dùng.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <img src={Icon4} className="img-fluid" alt="in nhanh Tân Á Châu" />
                    <p className="text-center">Kỹ thuật gia công cấn bế ép kim trình độ cao theo yêu cầu</p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;