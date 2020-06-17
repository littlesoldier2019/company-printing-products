import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../../assets/styles/BlogDetails.scss';
import { BlogContext } from '../../context/blogcontext';
import Button from '../share-compoments/Button';

function BlogDetails() {
    let message;
    let data;
    let formattedContent;
    const { blog, error } = useContext(BlogContext);
    const { id } = useParams();
    let history = useHistory();
    const goBack = () => {
        history.push('/blog');
    }
    if (blog.length === 0 || !blog || error) {
        return (message = (<div><p>Oops...something went wrong! Please refresh the page</p></div>))
    } else {
        data = blog.filter(item => item.sys.id === id)[0];
        formattedContent = documentToReactComponents(data.fields.content);
    }

    return (
        <>
            {message ? { message } : (
                <div className="blog-details py-5">
                    <div className="container">
                        <div className="row justify-content-lg-center">
                            <div className="col-12 col-lg-10">
                                <img className="blog-img py-0 py-md-3 py-lg-5" src={data.fields.cover.fields.file.url} alt="in nhanh Tan A Chau" />
                            </div>
                        </div>
                        <div className="row py-0 py-md-3 py-lg-5">
                            <div className="col-lg-2 d-none d-lg-block flex-column">
                                <p className="py-lg-3">CHIA SẺ</p>
                                <img className="py-lg-3 d-block"  alt="Tan A Chau icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAD/klEQVRYhe2YTWxUVRTHf+e+magZePdNEZpKMSUQFogJCSxAhoBdKDEm6gY/aqKJkY0slLhwwVLcWePKqCQu8CPWnTtijMV5/YjRuEISkQgytA3IzHsPSJDOu8dFmfqmacuEzlRC+O/Oxz3nN/fNO7nvwj3d5ZKFAjqEF/UEWwRd3UkAp+Zicap2UvaTzhefFzAe8V9AzSBoTyfh/pNOKHIoKMVf3zI1LvsvxqGdTkJ7pDYW9HUarTYW9CWhPRKHdjoK7fOLJusQXhwGE3HZvttpsLlKQvteFNqKDuFl/SZrRD3BFtAel5OjqpgktK+pzuTEoT8wdby7AJD8GDx7dbzQDRCN2P541N8IEJXttqhstwHEo/7GaMT2A1wdL3QnI8EzAFPHuwtx6A8AZHu4lE8F1l7rLW5eEBAoAhR3Rmej0WCdwtFoNFg3E5JjhQf+2Q6gRgddPb8PwCiHUQYARPSgiB4EQBkwymEAV8/vU9UPAGZqyDGAbI9gT/wnwHSqq7JAuYW2XJwmAhVRTW66zkD9EoDAOSc6CaAiFVEqN3/v+dn1KhVFzwM40UmjnJuJ1C+Bd2aBHourVg72xqHVlpI7oDi0WisHe7O+uY/4jtOCj7gdujKyYo3D9ItKLzMzt4pKVcVN2lIy/r8BXh7v8r16OuiUV4BY4Q9AUSziLMhD8Ql/k92TnF52wMvjXX6+npYdGBWetI/FwyK4Rjz5YeWDmpdLJufd10q9tgPm6vUPHWLSnLdr1Y5qa2/nYvXaAdVQNSw+DO5lg+kP2gAHbQY06vYhVPxSrdzw1caCPuPcm2A2oHq/E/KigEpL46ytgII8ouivDVt/Jp9c12GQi+BCEbkhgKLfryhWb/mCtB0QQxGl2jCvXC/uALf2BvlHV5f+vnJ7JdspVc9I5uAp2gVcu104WOIOxqH/GUhvxrUF+HbWShEMhTi03zUtFH63u+I3Og4I8irCVwJ/3XT8kqr8NBs15jSSvp9doY7twFOtdljyf9A5+aS4OxqeL7ayVD0JvJP1xaE/COZ6q/WX/7CgslnR31pNX/IOitGno7Ld1LCNmFONOVgbC/qkrk80L2CrURlaFkCBYZTnMt+GaxD3JVAG8KbZqoaPgLOzGUpVnSvTopYE6Jfix7N2HNov5klLbCnecLs97vgD6z3ApeqOA8wpTaecJkBVqcLMeFhGJgCiE3Y9gOSkmvU3ARanaidBJ7xUX19OOADjcUCUSqFSaxriTWNG9pNGoRwCPk9Ca1JPPi7ujM52Eiw6YdcbjwMKbyu8NPcabt7rtyi0+4FBgbWdhGtI4QLKW8Hu+Ju5sUUvMK/1FjfXU9fdSTjPmKkVF2qnFrrAvKe7Xv8Cd9Kei+MnD6oAAAAASUVORK5CYII="/>
                                <img className="py-lg-3 d-block" alt="Tan A Chau icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFi0lEQVRYhe2YTWxc1RXHf+e+9xyniee+cYyikFAZlBUKixYc0jZAnPRDJAtWCaW7VqWrdkEEQkraDTR2pIp40UpFalWxSSRSwa6BqjWDO88mEFdqQVWligoqags1iee9mYwzzHvvni7GTo3rjzzDRGrFXxrNnXvPmfN7Z+7cjwOf6f9cstqAnseLd4R7BL2tmwBOzb/KH9b+IsfIVxpfETCZLH0TNWdAd3QT7j/SWUWOh/uTF9c1Taqlx5LIpvXInqq9EQ52G632RjhYj+xIEtk0juyjaxrrebwkCmeTqv1xt8GWqx7ZkTiy/9TzeEv7zdIP8Y5wD+gO58svby0euJxfCOxs7irfvbTfLLMrA5S/FL/fLZBrU+V74shOxJGduDZVvmexP3woeQ8gzXXbUnu/WyCrKXPuZyhnESRT91PgwFr2yzN4ayQIayxxS/WJM3j1Yn/JT7MjYuSAIrd34uusopXM8y9s2zdX/1hAY76/kDl8MT/oGqBOEyQt+6Rk+dOIOBzj4P7WyY58HuTnfpYTV+1pmyXPyTAZwNYv195hnZ/1EwPWKmHYaOlLAntUeMpuSl6oUf6cue52o5BvNu+Wqc0nLfsdEZ6tB/artYocLQ/HcdFYheegThN4gb6k6PYcM+Ry82b9o/Blr+WuiDAtwrTXclfqH4Uv+8ZMOZEhkNtNoOe1UjwhhQGTln1SYU+Od1jQ+zzj3kSdOpWvXW/2br3e7N3qkK8D5M695Tm+6DyOAF9oBPaJovEKPdHVi/0lyfKnVXiKnNAYPavwTLi/PrrMtAJU4kl7UtGzfu4N5eQ/AkYvRwPP37b/SuNmYxbKoJ9mRwBnNyUveEZHQH8X7k+Ww91Q+JXklIiMO7IRW05+BUhAerhIzEKAYuSAKONxI9wC+g2n5sx6PoqOgTw81+jvVRiXAv/gwoCqstMJ70uguwE/zYLp9XxSDS4BgdfOdyO8B7qza4AIiiAoetMBfCcA6ouKqoGb9y0MKKozRhl0m827QBoE6dB6Pl6e3wekzpi/KzIIMtM1QBV9XeFQeXPtOiK/NcLx9XxE5Tjohf6+uZbAQYXXuwaYef4FgKRmv+2JnFDVQ/GkPbmafVIt/VDRgwb/ZH2u9F3ApQSvFIlZaB3ctm+uHlftaRGeTVWHPCffckbPJZPhPkXH2u2etwB6etp7ReW4ogeNyGN5ls+LJ88IjBRZA2EDO4nNkueAPxvlQh7wJw9vCHVOlFc3Be3GpqDdEOVVcJmHN+QyfVsMvwH+2DebjBWNVxhQhslcKkdBZ02ul3LyB0rl+tHM9wbUca867s18b6BUrh9zmj0kHpcQPsh7zbHVrpZraUOnmfJwHGuFhxf21tF6zZ72yMfF6D8AvCwfrNfsQQQnMNI3m4xtBG7DgNDJJCQ/uRwNPB+QHjYwrLAbQGBG4XspwStF59ynBrioBYAXF16futacg/Ef7KHFdmMyfFCnCQCSqdLey9FAH3RuadcubtkOEFftXXHV3gVw7eKW7Yu3tsvRQF8yVdoLnfNkYzJ8cKUYhQCvTvTfIYbfX53ovwPAqb7WaJXvB8DJuR5pPwKQ524sT73HARBOIJwAyFPv8Tx3YwA90n4EJ+cAGq3y/U71tZViAPjLttGPAarKHHTKET3SbgHthXeApnNuvsNB06mZ70BpEzHNTlOaotLs9Jsmos3Ow5l5gU678x3NBfAbMeIJeyeA+B2GFdUpfZRm6pE9BaBTuzbfGFutXaFXtfOgOk2wOA1UMVqhd13/hXY9sqP1qv1geenjvxRH9tGF4tHorSgexRP2zvqkPZ1ENo2r9ujy8RUvz3FkjwFnBAqd3TYqhRmUJ8IHkl8vH1uzgNncVb47y932bsJ5xny4dab2140u5J/pf17/BpSHjx2qsRhjAAAAAElFTkSuQmCC"/>
                                <img className="py-lg-3 d-block" alt="Tan A Chau icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRYhe2YW2xURRjHf99sVwrbPXMWwVoQAUVNFKNGDdIuQjQxxMRLYryFBLzEa3gA78a+eEONRp58MGJiookRL9F4BY1N3bOFYIwxBDUaBcJSCmj3zGkbLN09nw8FXSrd3WJrjPH/dub75vv/Zs6ZM5OB//Ufl4wW0PUkwhZ/vqDTJxIgVrMv01PcJtdRPlr8qIAu792AmudBWyYS7k9ptyL3+Fn3Rs1Ul/NudIEdigL7ZHGTP2ei0Yqb/DlRYNe4wA6Fgb2+arKuJ+ECv9vl7BMTDTZSUWDXhIEt6HoSle2m8iFs8eeDtsQNsk4VEwX2VtXhHBd4y3o2NKcAorx/Vf/mVDNAmLeXuC5vHkCYs+eHOXs+gOvy5oV5ewlA/+ZUc5T3rwLo2dCccoG3DKDSIy7zksDMgZMyZ44KCGQAMgvDHWGXP0thXdjlzxoOyaupyYMXDBfWtXEpuRTAKO0oywBEdKWIrgRAWWaUdoC4lFyqqmsBhmvIqwCVHv5itx1gqKzHVwI1jDblEmskUBDV6FDTT1DaDyCwMxbdM8yhu0SlcGi8u/7or1JQdBdALLrHKDuHI6X9kPhpFI/qKub8JS6wWlfyBMgFVos5f0ll28hX/K/Tvx5w1G/waOrLN52QbuvfVytPO2h0SbtaYAVwCvCrCh8p8limLdwZdaVbUbMiLelV0lo4UK1W3TMYBekzYk3scYG/ulpez4bmVJS0nwM3InpvnJDTEb3SQMmofu0C+73GJq/KEgqFg7V8655BVbkW4SvQ9ihvk+lW96wIf1lQk1ODz4DENgovlMsZPNS8A/gyDOxbBq5ROBVojmZ4z0FUdcD1f4MiM0E+ERO3qXJXlLcbi3l/dmVKz4bmlKK3GMwdFXB/yM+6T2MhCRQBY+L4pVq29QOq7kaY47X2fV9uNOeCbjWq37qcfb2Y85doB42TpgzOE+hLZ3u3jV6HjUDSxHJF+uL+b8cN0DTEb6N6dW+QOXnqBUVns9E9ovF5Iuwwoq9ESRsZ0beAZLU6IrpQhBfTF4eddfnWC6jlxHKgKYF+PBBMmwHgLer7wcu6h702NzcWOU3hblGzonohOVFV9tbrO4ZFoseJyNYY3XJQS9OB7sOx4cUS7oTD21nVSjMUdtfrW/cMxmI+UGhBeSCzKPym3n5HoHXQCHJOkmQw7oCZbNihEBjhnb580wnHAtiX9C8T2J7K/tJdO3uMgADlhsRNChfFmtjuAm/tWAGV+BYVfXksfcYEOLW3dxBwQFeMyY2lb/iFvRRkgSfeugkDlMsZFJGHgLMTUt5TN1zOZsTwAqL319p7/xYggNcWvqLCo6pmowu8XBTYNdXytYNGEX0PkS22LXptrH7HdNySkn6m8AZIm4pOGS2vmPdnDx8c5MDApCl3HotXXf/B6Av/ajXch2oSYTbgC/oJ0Grbos0j8/UjJkVp71ZUH0fkQ8+Ft9ms+8vePG6A5rihTeVS4kdElgM/CzxCUt/1FvT9WgnVb/0FqrrUwXKjKGpu8rLF948FbEyATRcN7AVudp3eGoysiIVVMmReDAN7UGAv0BTBNFQdaKfAg+mp0ZtyFjXPe+MCeFh2cfQj0A607w+mpRvj32apSU6NNT5QjhP7jl/cu6tWjZpAeuQZ8whAVelFlOImf05mYbijWqHp2V/6gJrHpXoVdtq5ANIgvZXtR6ziTE9xG2h3oqy3jZdxvTIJbhelkCoUqw86DOz1hy6PnvonLo/CTjs3ytunXWCHwpy9dmT8qNdvYWCvA54XmDnRgAAKu1FW+4vcmyNjVS8wB07KnFkqx80TCZcwpqdpd/G70S4w/9d/Xr8DgRdU1dR2FfcAAAAASUVORK5CYII="/>
                            </div>
                            <div className="col-12 col-lg-8">
                                <p className="blog-category">{data.fields.category}</p>
                                <h3 className="text-justify font-weight-bold my-0 my-md-3 my-lg-5">{data.fields.title}</h3>
                                <p className="text-justify font-weight-bold">{data.fields.summary}</p>
                                <div className="text-justify">{formattedContent}</div>
                                <Button onclick={goBack} text="Xem toàn bộ bài viết" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BlogDetails;