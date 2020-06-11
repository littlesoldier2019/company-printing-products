import React from 'react';
import Line from '../share-compoments/Line';

function Services() {

    const data = [
        {
            title: "Thiết kế",
            list: [
                "Namecard, Danh thiếp",
                "Logo, nhận diện thương hiệu",
                "Brochure",
                "Leaflets",
                "Catalogue",
                "Hồ sơ năng lực",
                "Bao bì",
                "Văn phòng phẩm"
            ]
        },
        {
            title: "In ấn",
            list: [
                "In amecard",
                "In bao bì",
                "In tem nhãn",
                "In decal",
                "In decal nhựa",
                "In trên vải",
                "In lụa",
                "In Offset"
            ]
        },
        {
            title: "Sản xuất",
            list: [
                "Bao bì thực phẩm",
                "Túi xách giấy",
                "Sản phẩm quảng cáo",
                "Tem nhãn thực phẩm",
                "Hộp giấy",
                "Hộp bánh trung thu",
                "Giỏ bánh trung thu",
                "Sổ tay"
            ]
        }
    ]
    

    const content = data.map((item) => {
        const list =  item.list.map((subitem) => {
            return (
            <li className="text-center">
                <p className="d-inline-block text-center">
                    <span className="mr-1">
                        <img alt="in hộp giấy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADq0lEQVRIicWWT2wUdRTHP292ty1td2baolVaEtRqaryJB2S3Eq5QWwzRSw8ajv4jCmpM1NR4EaLxL/FPjCc9oYVKaoKXRne6IcHoxT9pYqmGAjUR2JmGpd2dmedhdvp/uwsHfadffu+97+f9Zt7vD/xHJrUCLn/fvjWZ8AdB9gLbgK0V13lgGtUxP5Uc7dhxZeamQMV8R5ev/muqHACSNeoJRfg6QF5oyxT+qhvkOfaAol8AaaAEnED0pKj+XLzWPAPQ3FLsVpX7ERkEHgEagDlRY8jsu3qqJsidMJ9B5V3AEOF46POSvcud3mg5hZx1pyEcVdgPhKAHraz3YdUEz7EHXMcKXMfyXcd+biPxdfNz9qEo1wq8XNvD666omO/oKof+70Aa5HkrW3jnRkExTEXfArxkWO5teah4CcCIA0qh/zqQFuH4jUC8XLrfdazJq469G8DsK7ytMAKYQSI1vGJFUQsH00CgAb21/skiZDy9WVPGL0An8IeVde8GKExYd4nyG2CkjOS25p2XLxgA0T4hAZyoFwKgKeNYBQLowXjezrhTIowCyXJQHoTFTyd7olgdrRdSyFmPAo8BKHxmZb1vVxQRa4mxZwkk9ACQ4Gw9kLkfWm8RIW7fP4Nk4tDqGEF/rCB7lkDKbQClsOHv1QluznzFnbBPzZ7ubInnAiPxCXArEIbIgY4dV7zVeQs0XqwMt0CNo8XLp3s1lDdQpal1fmz2dOfeTS3X9xGdBCD6QVvGHd9II7a4vS8BNOrC7cud6QfnJoGPIk12bWpe+A7k/Yp70hTz5WrCjSxsqQwvLAdNASiyfXmwCGpm3KdiGKI7gXYgAH1Cds5crwZS5IGKytQSSHWsojy4OmENDBA4YmW9M9UgUV6kpRJpRxv2THt30g+mgVCVe+0+99yaChXxJuxhVO8x293H5T5K1SBu3uwhlF9ZtmEXnV7O+tR1LPUc66uNKq3HCo41UtH6OJ5bPOsSkhoG5hT2ezl7zb6o1zzHOixRV7pG2R9eA2rJ/nNR1BgCQhU9cjMwz7EOK7wJhIgOte6+Nhv71l58jvk0yHuAoTCC8KKdcac2Arh5s0dDOVpZSYjqs1afd2x5zPpXeS7dr2J8CZhASYRRVT0phv40v9A0A9DUON+toWwXlX0qDAIpwEV0yMp4Y6s1qz5OvPH0Zk0mXkX0SWo/TnwRPk8E5eH4oqsbFFsx39FVUn9AlH6UO5DKc0s5j8g5FR1rkOQ3K1r4/7R/AaTZf7jE0T/7AAAAAElFTkSuQmCC"/>
                    </span> {subitem}
                </p>
            </li>
            )});
        return (
            <div className="col-sm-12 col-md-6 col-lg-4" key="index">
                <h4 className="text-center mb-sm-1 mb-md-3 mb-lg-5">{item.title}</h4>
                <ul>
                    {list}
                </ul>
            </div>
        )});

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center m-auto mb-sm-1 mb-md-3 mb-lg-5">Cung cấp giải pháp hiệu quả <br />cho sản xuất và dịch vụ của doanh nghiệp</h3>
                <Line />
            </div>
            <div className="row">
                {content}
            </div>
        </div>
    );
}

export default Services;