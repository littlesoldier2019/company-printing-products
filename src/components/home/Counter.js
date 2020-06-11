import React from 'react';
import CountUp from 'react-countup';
import '../../assets/styles/Counter.scss';

const Counter = () => {
    return (
        <div className="bg-light py-2- py-md-4 py-lg-5">
            <div className="container py-2- py-md-4 py-lg-5">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter text-center mt-50">
                            <div className="counter_icon">
                                <div className="icon_wrapper">
                                    <img alt="in giá rẻ" src="data:image/png;base64,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" />
                                </div>
                            </div>
                            <div className="counter_content">
                                <span className="cont">
                                    <span className="counter">
                                        <CountUp end={10} duration={2.75} />+ năm
                                </span>
                                </span>
                                <h4>Kinh nghiệm in ấn</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter text-center mt-50">
                            <div className="counter_icon">
                                <div className="icon_wrapper">
                                    <img alt="in giá rẻ" src="data:image/png;base64,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" />
                                </div>
                            </div>
                            <div className="counter_content">
                                <span className="cont">
                                    <span className="counter">
                                        <CountUp end={20} duration={2.75} />+
                                </span>
                                </span>
                                <h4>Nhân viên chuyên nghiệp</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter text-center mt-50">
                            <div className="counter_icon">
                                <div className="icon_wrapper">
                                    <img alt="in giá rẻ" src="data:image/png;base64,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" />
                                </div>
                            </div>
                            <div className="counter_content">
                                <span className="cont">
                                    <span className="counter">
                                        <CountUp end={100} duration={2.75} />+
                                </span>
                                </span>
                                <h4>Khách hàng thân thiết</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_counter text-center mt-50">
                            <div className="counter_icon">
                                <div className="icon_wrapper">
                                    <img alt="in giá rẻ" src="data:image/png;base64,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" />
                                </div>
                            </div>
                            <div className="counter_content">
                                <span className="cont">
                                    <span className="counter">
                                        <CountUp end={300} duration={2.75} />
                                    k</span>
                                </span>
                                <h4>Sản phẩm in hàng tháng</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;