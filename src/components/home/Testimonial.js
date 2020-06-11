import React from 'react';
import '../../assets/styles/Testimonial.scss';
import Line from '../share-compoments/Line';

const data = [
    {
        title: "Alex Chung, Giám đốc cty FUNMEX",
        copy: "Đối với chúng tôi Tân Á Châu không chỉ đơn thuần là nhà sản xuất mà còn là đối tác hợp tác lâu dài. Chúng tôi hoàn toàn yên tâm những sản phẩm bao bì của mình do Tân Á Châu sản xuất: chất lượng đảm bảo, giao hàng đúng hạn, quy trình làm việc hỗ trợ rất tốt."
    },
    {
        title: "Nguyễn Hồng Đức, CEO Kielo Consultancy",
        copy: "Những thiết kế của Kielo thường đòi hỏi rất cao về độ màu và chất lượng in. Bên mình đã thử qua nhiều đối tác, riêng có ở Tân Á Châu chúng tôi có thể an tâm về sự sắc nét trong từng sản phẩm. Màu in rất nét, hoàn thiện đến từng chi tiết."
    },
    {
        title: "Nguyễn Tâm, Giám đốc kỹ thuật Mercedes Benz",
        copy: "Mercedes là thương hiệu quốc tế. Đối tượng khách hàng bên mình cũng nhắm đến phân khúc sang trọng. Vì thế trong từng sản phẩm quảng cáo từ brochure, leaflet,...đều đòi hòi độ chính xác tuyệt đối cũng như chất liệu cao cấp. Chúng tôi rất hài lòng với dịch vụ của Tân Á Châu."
    }
]

const star = (
    <div className="text-center mb-2 mb-md-3 mb-lg-5">
        <span>
            <img alt="in chất lượng cao" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACfklEQVQ4jd1TS0iUURT+zr3/OI5iYT5CmITfyVcSRi6KINBKCIlchPSgQEhcjUIIRq5cJb2MUuihbTKQcBFKSPR2VVFGQoXN5IyYIA2W5ODM/I/5T4s0ZpypiVbRgbM453znOx/n3Av8F+b1qec9PvXcn2BFKoDPo9aSgWlhipkpT9GeVHgl5UhNNNmDWqNZoDAHxQCAh3+tcPqVq4Z0er5hx2xYVacjwhTP/C83Vv+uh5Il+Um1MuuYUZnlGcW2dJRcLfkAwFM9AdPIvEUUPekMF/qp5qn5S8LZMVcbiLYshwZAfitq3SmsmXo7P9c1AgC5Baf2fxor2kyQ9QxWiWBbZnnj3Pmx+yfh1wdFazWhXC/Y7TkYp9R72R5Mi9RahBEAsJjqs3X7fSpu1WJxc49Kbtsts3ldre/bT4WB0eIWFsKxfu+Hs8xMi/4L48SoROKeLSZMrFHbqoiIP98rbSfLCufXeXsQC86v8/YIjRcCwyWniYgVXTRLXS5IXSLODblo02xuIuL54dJ2qXFohSzpUb4MlTSxEHm5Bya7QhOXDhHRYNwaGEcyKlsH54fKOghWIKfB0x9bT3g2OQ2efqmhAgBE1JYnDIk4N2UOACg6KlaTJSUEAKEjCgBSFy5pyFHSle2kiW3SkKPSEMUAQCZHk/UmGHc7HcG+8iupcMG+Tde42+lYnU/4eqG0rHKpY3IlXuot20dExwCAmQcy3ZN3f6jn96G0rHIAr2P7E46iXaw4zAILzFaIQG4QHtvTHTcAQIuEj4Oxi8G9RCKDLGTbT7yLO1qCQo6IF0JEu4jEuBJKb6TO8VBM+Sp3Vt00MyJuBrZaUdGRajX/nn0Ho1v+iZk+7SsAAAAASUVORK5CYII=" />
        </span>
        <span>
            <img alt="in chất lượng cao" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACfklEQVQ4jd1TS0iUURT+zr3/OI5iYT5CmITfyVcSRi6KINBKCIlchPSgQEhcjUIIRq5cJb2MUuihbTKQcBFKSPR2VVFGQoXN5IyYIA2W5ODM/I/5T4s0ZpypiVbRgbM453znOx/n3Av8F+b1qec9PvXcn2BFKoDPo9aSgWlhipkpT9GeVHgl5UhNNNmDWqNZoDAHxQCAh3+tcPqVq4Z0er5hx2xYVacjwhTP/C83Vv+uh5Il+Um1MuuYUZnlGcW2dJRcLfkAwFM9AdPIvEUUPekMF/qp5qn5S8LZMVcbiLYshwZAfitq3SmsmXo7P9c1AgC5Baf2fxor2kyQ9QxWiWBbZnnj3Pmx+yfh1wdFazWhXC/Y7TkYp9R72R5Mi9RahBEAsJjqs3X7fSpu1WJxc49Kbtsts3ldre/bT4WB0eIWFsKxfu+Hs8xMi/4L48SoROKeLSZMrFHbqoiIP98rbSfLCufXeXsQC86v8/YIjRcCwyWniYgVXTRLXS5IXSLODblo02xuIuL54dJ2qXFohSzpUb4MlTSxEHm5Bya7QhOXDhHRYNwaGEcyKlsH54fKOghWIKfB0x9bT3g2OQ2efqmhAgBE1JYnDIk4N2UOACg6KlaTJSUEAKEjCgBSFy5pyFHSle2kiW3SkKPSEMUAQCZHk/UmGHc7HcG+8iupcMG+Tde42+lYnU/4eqG0rHKpY3IlXuot20dExwCAmQcy3ZN3f6jn96G0rHIAr2P7E46iXaw4zAILzFaIQG4QHtvTHTcAQIuEj4Oxi8G9RCKDLGTbT7yLO1qCQo6IF0JEu4jEuBJKb6TO8VBM+Sp3Vt00MyJuBrZaUdGRajX/nn0Ho1v+iZk+7SsAAAAASUVORK5CYII=" />
        </span>
        <span>
            <img alt="in chất lượng cao" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACfklEQVQ4jd1TS0iUURT+zr3/OI5iYT5CmITfyVcSRi6KINBKCIlchPSgQEhcjUIIRq5cJb2MUuihbTKQcBFKSPR2VVFGQoXN5IyYIA2W5ODM/I/5T4s0ZpypiVbRgbM453znOx/n3Av8F+b1qec9PvXcn2BFKoDPo9aSgWlhipkpT9GeVHgl5UhNNNmDWqNZoDAHxQCAh3+tcPqVq4Z0er5hx2xYVacjwhTP/C83Vv+uh5Il+Um1MuuYUZnlGcW2dJRcLfkAwFM9AdPIvEUUPekMF/qp5qn5S8LZMVcbiLYshwZAfitq3SmsmXo7P9c1AgC5Baf2fxor2kyQ9QxWiWBbZnnj3Pmx+yfh1wdFazWhXC/Y7TkYp9R72R5Mi9RahBEAsJjqs3X7fSpu1WJxc49Kbtsts3ldre/bT4WB0eIWFsKxfu+Hs8xMi/4L48SoROKeLSZMrFHbqoiIP98rbSfLCufXeXsQC86v8/YIjRcCwyWniYgVXTRLXS5IXSLODblo02xuIuL54dJ2qXFohSzpUb4MlTSxEHm5Bya7QhOXDhHRYNwaGEcyKlsH54fKOghWIKfB0x9bT3g2OQ2efqmhAgBE1JYnDIk4N2UOACg6KlaTJSUEAKEjCgBSFy5pyFHSle2kiW3SkKPSEMUAQCZHk/UmGHc7HcG+8iupcMG+Tde42+lYnU/4eqG0rHKpY3IlXuot20dExwCAmQcy3ZN3f6jn96G0rHIAr2P7E46iXaw4zAILzFaIQG4QHtvTHTcAQIuEj4Oxi8G9RCKDLGTbT7yLO1qCQo6IF0JEu4jEuBJKb6TO8VBM+Sp3Vt00MyJuBrZaUdGRajX/nn0Ho1v+iZk+7SsAAAAASUVORK5CYII=" />
        </span>
        <span>
            <img alt="in chất lượng cao" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACfklEQVQ4jd1TS0iUURT+zr3/OI5iYT5CmITfyVcSRi6KINBKCIlchPSgQEhcjUIIRq5cJb2MUuihbTKQcBFKSPR2VVFGQoXN5IyYIA2W5ODM/I/5T4s0ZpypiVbRgbM453znOx/n3Av8F+b1qec9PvXcn2BFKoDPo9aSgWlhipkpT9GeVHgl5UhNNNmDWqNZoDAHxQCAh3+tcPqVq4Z0er5hx2xYVacjwhTP/C83Vv+uh5Il+Um1MuuYUZnlGcW2dJRcLfkAwFM9AdPIvEUUPekMF/qp5qn5S8LZMVcbiLYshwZAfitq3SmsmXo7P9c1AgC5Baf2fxor2kyQ9QxWiWBbZnnj3Pmx+yfh1wdFazWhXC/Y7TkYp9R72R5Mi9RahBEAsJjqs3X7fSpu1WJxc49Kbtsts3ldre/bT4WB0eIWFsKxfu+Hs8xMi/4L48SoROKeLSZMrFHbqoiIP98rbSfLCufXeXsQC86v8/YIjRcCwyWniYgVXTRLXS5IXSLODblo02xuIuL54dJ2qXFohSzpUb4MlTSxEHm5Bya7QhOXDhHRYNwaGEcyKlsH54fKOghWIKfB0x9bT3g2OQ2efqmhAgBE1JYnDIk4N2UOACg6KlaTJSUEAKEjCgBSFy5pyFHSle2kiW3SkKPSEMUAQCZHk/UmGHc7HcG+8iupcMG+Tde42+lYnU/4eqG0rHKpY3IlXuot20dExwCAmQcy3ZN3f6jn96G0rHIAr2P7E46iXaw4zAILzFaIQG4QHtvTHTcAQIuEj4Oxi8G9RCKDLGTbT7yLO1qCQo6IF0JEu4jEuBJKb6TO8VBM+Sp3Vt00MyJuBrZaUdGRajX/nn0Ho1v+iZk+7SsAAAAASUVORK5CYII=" />
        </span>
        <span>
            <img alt="in chất lượng cao" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACfklEQVQ4jd1TS0iUURT+zr3/OI5iYT5CmITfyVcSRi6KINBKCIlchPSgQEhcjUIIRq5cJb2MUuihbTKQcBFKSPR2VVFGQoXN5IyYIA2W5ODM/I/5T4s0ZpypiVbRgbM453znOx/n3Av8F+b1qec9PvXcn2BFKoDPo9aSgWlhipkpT9GeVHgl5UhNNNmDWqNZoDAHxQCAh3+tcPqVq4Z0er5hx2xYVacjwhTP/C83Vv+uh5Il+Um1MuuYUZnlGcW2dJRcLfkAwFM9AdPIvEUUPekMF/qp5qn5S8LZMVcbiLYshwZAfitq3SmsmXo7P9c1AgC5Baf2fxor2kyQ9QxWiWBbZnnj3Pmx+yfh1wdFazWhXC/Y7TkYp9R72R5Mi9RahBEAsJjqs3X7fSpu1WJxc49Kbtsts3ldre/bT4WB0eIWFsKxfu+Hs8xMi/4L48SoROKeLSZMrFHbqoiIP98rbSfLCufXeXsQC86v8/YIjRcCwyWniYgVXTRLXS5IXSLODblo02xuIuL54dJ2qXFohSzpUb4MlTSxEHm5Bya7QhOXDhHRYNwaGEcyKlsH54fKOghWIKfB0x9bT3g2OQ2efqmhAgBE1JYnDIk4N2UOACg6KlaTJSUEAKEjCgBSFy5pyFHSle2kiW3SkKPSEMUAQCZHk/UmGHc7HcG+8iupcMG+Tde42+lYnU/4eqG0rHKpY3IlXuot20dExwCAmQcy3ZN3f6jn96G0rHIAr2P7E46iXaw4zAILzFaIQG4QHtvTHTcAQIuEj4Oxi8G9RCKDLGTbT7yLO1qCQo6IF0JEu4jEuBJKb6TO8VBM+Sp3Vt00MyJuBrZaUdGRajX/nn0Ho1v+iZk+7SsAAAAASUVORK5CYII=" />
        </span>
    </div>
)

const content = data.map((item, index) => {
    if (index === 0) {
        return (
            <div className="carousel-item active" data-interval="10000">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-7 mx-auto">
                        <p className="d-block w-100 text-center">{item.copy}</p>
                        <h5 className="text-center">{item.title}</h5>
                    </div>
                </div>
            </div>
        )
    } else {
    return (
        <div className="carousel-item" data-interval="10000">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-7 mx-auto">
                    <p className="d-block w-100 text-center">{item.copy}</p>
                    <h5 className="text-center">{item.title}</h5>
                </div>
            </div>
        </div>
    )
}

})
const Testimonial = () => {
    return (
        <div className="container-fluid my-1 my-md-3 my-lg-5">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <h3 className="text-center mb-2 mb-md-3 mb-lg-5">Khách hàng luôn tin tưởng <br/> chất lượng sản phẩm và dịch vụ vượt trội</h3>
                        <Line />
                        {star}
                    <div id="carouselTestimonial" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {content}
                        </div>
                        <a className="carousel-control-prev" href="#carouselTestimonial" role="button" data-slide="prev">
                            <span aria-hidden="true">
                                <img alt="in giá rẻ" src="data:image/png;base64,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"/>
                            </span>
                        </a>
                        <a className="carousel-control-next" href="#carouselTestimonial" role="button" data-slide="next">
                            <img alt="in giá rẻ" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFNklEQVRYhe2YS2xUZRTHf+e78+jQx+2AQQ0iYIKKVqtYFTEFGuMKEjHGRE1MfGxcYSIkQqIrNKkBXJj4jI+FJrojRF0pEegoaBCt8ggxFktVEBHmDp3O3Llzv+NiGEPHmXZuS10Y/stvzuN3zzfne8El/c8l03FWxWQznTcZsV0oi8RIG4BaHUUYCq1zMN179qAI9j8F9DIdyxR5UmAtcNkk5qdF2a7oO25v7usZBcxm3B6EraKsrIwYnPYenI67MC0LkNhsALR8Blv8hTC3l/Dct3C+gAK7rGV95wrvwEUF1P3EvaL7osAzgGNaFpCY9zTx2auRxOUT+5ZOEpz5lNJvr2CLwwChKtvclPec9BBMGzA74KZFdAdIr8RcTc7fJIkrnwBJNPNtF5JSOvEO/ki/atkThT0ayH3pvmx2yoDZATdthC8Uus2s65m15ENMy6JoYDWyxSHGDj+MLRxFYDAMZNVEkKbRD7qfuIjuUOiOuStpvfmzacMBmJZraO3+nJi7EoVuiesO3U88MqBXdF8E6TWzrie15APEaZ82XFXitJNa8j4mdR0CK8757uaGtvUGsxm3R2CfxFzT2r1LLkbl6skWh8gP9qmWPauWO+p1d/0KClsBJzl/04zBQWW6k/OfFcAxhi31UWrkZTqWgew1LQtpW/pN9G6NKuszeuB2rH8cVJfVLub/qqCoPAGQmLeuKTi1BfzhzYS5fVMDNMlKLkBMJXdDQFWMCveDIT57dVPxtXgM/9eXyR9cg//rNpjCthufswYQVFmrOn5WxwGeHUh3AZc57T2T7hD/BJh1A6nFryMmgT+8mbFDD6LB6UiAkrgCp/02gLmjX6VvbAjomPAmAKdjWaQE8bkP0dq9G6f1RsrZnYx+t5xydlekGNWc1lYY6gKiLIJKd0WVSS2m9eadJK58Cg1OMXb4Afzj/TQ75dWcKjJu2Rj/H0TaASTmRgY8n4WWa/pJLX4DMXH8kX5Gv1/RlKvEOishhI6GgDOhaZxVgRpAQc8BaNmbWjRbpDi0kcJPT6E2IDl/I623ZJpy1XLlvGCV3IXjsXFWwrFKnqHobIWfKBx9jDB/CInPJXXtW8Q6VzXvfz6nqB5rCBha50fHWMLc3khwwamPKA49g4ZjxDrvIXXtm0h8spvAeIVeJacxzo8NjVQxXsb908uk1fontBmF+UPqZTrV+3KOFke2qmrYlN+Fsv6JSoyM+8eEC7UIVpTtYAnOfNrUl0tyIYl562jt+oTkVetrQzal4K+PAUVguwg6Ln6tsTfQcSci+0zLAtpu/QZMMnLCSIp6WHB7c18L7LLFYUon351ZOKB08u3zcOysdy2tOx9W2QCE/ki/TqWjm5Ut/Iw/8pICoTWyoZ5NXcDOXu9bVbZp2ZOxww+jYa6e2bSkYY6xI4+g5ZwIbEnfnf2+aUAAN+U9p7DHFo5SOPLoRYXUMEfhyKPYwlFU2N0eeM83sm0IKD0EGsh9AoNlbzf5wXuntIDXyhZ+Jj94L2VvNwKDWpK10kc5MiBAui+bDQNZVa1kfrBPS7+/BtafAplP6fdXyf/Qp9XKTXYnhihPHwX3BRHWA45JXk1i3jric9YgiSsm9i2dJPjrk8rTh38cIBTY0h54z09UuUiAVWX3uEuNYatCX9XdaVuK4y7HJBf8s71pcBrrDxN6XxGOHoDq2qvstEY2NGqIaQNW5Q103CkijyvcD8ydxPyUwHZVfW/Gn99qpYrk96a7wjDsUpGFRnABrOKJ6DGDc7Bt+dlDtdvXJV3SBfobDDedzanUB1EAAAAASUVORK5CYII="/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;