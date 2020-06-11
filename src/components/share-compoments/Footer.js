import React from 'react';
import '../../assets/styles/Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className=" footer-info py-sm-2 py-md-3 py-lg-5">
            <div className="container">
            <div className="row">
                
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-12">
                                Logo Tân Á Châu
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-12">
                                <p className="info company-name">Cty TNHH Tân Á Châu Printing</p>
                                <p>Công ty TNHH In ấn - Thiết kế - Quảng cáo Tân Á Châu chuyên cung cấp các giải pháp thiết kế, in ấn uy tín cho doanh nghiệp. Sản phẩm Tân Á Châu được chứng nhận tiêu chuẩn FSC quốc tế, chuyên các sản phẩm in ấn bao bì cho các doanh nghiệp trong và ngoài nước.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-5">
                        <ul className="footer-list">
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>Địa chỉ:</span> 143 Đường TA13, Phường Thới An, Quận 12, Tp Hồ Chí Minh</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>Xưởng in:</span> 118 Đường Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Tp Hồ Chí Minh</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>MST:</span> 0315542574</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>SĐT:</span> 0915 788 336</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>Email:</span> trantuan.tanachau@gmail.com</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="info"><span>Website:</span>  www.tanachau.vn</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <ul className="footer-sitemap">
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="footer-link">Trang chủ</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="footer-link">Sản phẩm</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="footer-link">Bài viết</p>
                            </li>
                            <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                <p className="footer-link">Liên hệ</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-trademark py-3">
            <div className="container">
            <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <p className="">Thiết kế <span>&amp;</span> Phát triển <a href='https://github.com/littlesoldier2019/'>Helmi Nguyễn</a></p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <p className="text-md-right"><span>&copy;</span> Bản quyền Tân Á Châu 2020</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;