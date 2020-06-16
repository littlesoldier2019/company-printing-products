import React from 'react';
import Line from '../share-compoments/Line';
import Button from '../share-compoments/Button';

function ContactForm() {
    return (
        <div className='container mt-0 mt-lg-5'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col-lg-10'>
                                <div className='pb-3 pb-lg-5'>
                                    <h3 className='text-center mb-3'>
                                        Liên hệ
									</h3>
                                    <Line />
                                    <p className='text-center'>
                                        Công ty TNHH In ấn - Thiết kế - Quảng cáo Tân Á Châu.
									</p>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Họ và tên</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="position">Chức vụ</label>
                                    <input type="text" className="form-control" id="position" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Điện thoại</label>
                                    <input type="text" className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Nội dung</label>
                                <textarea className="form-control" id="message" rows="8"></textarea>
                            </div>
                            <Button text="gởi"/>
                        </form>
                    </div>
                </div>
                <div className='col-lg-4 my-0 my-lg-5'>
                    <div className='contact_info pt-3'>
                        <ul>
                            <li>
                                <div className='row mt-3'>
                                    <div className='col-2'>
                                        <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADL0lEQVRIib2SW2hcVRSGv7Vnoolo+5BW50xIdWZCRCpU9MELnagU8qBPLfYpBR8MUppW+mRTaMZtoyatFQJGEKkIYhVs8YY2T5qCaPsmaLUXM1MM7ZlciBe0JjHn7OXDTNJJnDN16mW9rf3/+//OWvvA/1Dyd0x+XyorQg+YrKJrgGkRPndOhlv681/8I4jah+JFHX8Z1U5g0JnYSIu/evJS8pdbTKiPINqrcDxp1u0WeyKIyonXgpQA3Bo3N2y42X77W4V0EXhtyq5/O3Bzx3w3PgTsrHsSvy+VReSNuGm6awVgWU0/fftNC40LX6vKtqjVRU4iQo+iBxYBvk2vw3EYuB84iaE7aQvjaw+e+9XPZQZFtAeoCjFREDBZZ2IjS23I6wqfmt8vJ4DRMrBs1RGgIzIpSlC0eXaG6SujcW+DaXolcWjycsNcwzBw36I0j5sCmuuGAH5js7ZW9KcCN7tryq6/caHxj6eAU4tCPDCtoP61QM7GQ3d3hbMbeDhws0VUOsp9SRK5B+RMVFD0L6x8pGIeA94FSNrCONBZzSroVtAP657ExOQ90E7ftq+J/BCguLdtLcImWYh9UDckYfNTKrwvYbCjFsRd53YCx7yBsekoT603wYh5UYWeGdu2qpr+4570alG248KXaubUEj079p0Kx+dV91TT5xrpFeHj5HM/RD76VSEALojvQ/XJSduerjyftO1plO4giOeulrHs7/KfSQ+g9FYcfentP7+x2JceCF1wWGGTgAKELngVeKH1+fOX/FzmBOiDS7eEweSzhb1X2nKpxRRd+oIx8mjC5k9XwnUrseId6ZOiMuz1598s5jKPK7rDO1N4QI4SVnonbOZO5/QTzxRSYnFQsa6J8LYs8NNKAIAcJTTKEyp6yLepDkUPqprtKwEACZs/LfBzkdTGxbMliEqsS5AjVVZautxf+AbVIZyMAkMt/WNfRXlB3sKZbcsg3+9qux7cltDIO9EXwYtdGBTY75nCgVq+Uo7bUsotl5/LbPZz6c9qXay3/L7UqJ/LbIaldWmXopGrusY6AtoFIDO2bdW8cxNA078MAZibN877D3L/Wn8CluBD3IpqpPoAAAAASUVORK5CYII=" />
                                    </div>
                                    <div className='col-10'>
                                        <p className="info">
                                            Văn phòng - 143 Đường TA13, Phường Thới An, Quận 12, Tp Hồ Chí Minh
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='row mt-3'>
                                    <div className='col-2'>
                                        <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAABcElEQVRIie2Uv04CQRDGf7NHQ6PRhoix8DS+BK2FJhbW9D4D3XmAtYWttb2NxhhaS59AwMJAtMHEhkZ2LLgjcuE4FgiJiV85t/P9udlZWAFkUrET+KHAuSuZQnW71g6T9ZxrQxo6gZ961sxKsgj+RZwgAG/h3n5uYE+tiAcgyiGACo2ZiRI9RnXw7ZnbnbDVzAF4Vh9U5NHAVyT9HDnYcLA71qMia57Ve+AAgG7g68xkDoh5U/dkHryH/om13AiUt2rtu7i+1MGrRSPWsT+z1CSR+/VkfSVXeGKSP/lAZs6kG+yeKbKZ9l3QXrH2ej2NI3vwavJGNHUpVU0/iyI3dEOzG/iXCh8AopRUeBpatX2LfCYbJyUQpdQJ/ErEWQBeRiLGmiNrtCxo9CSQz0oyMYGQN/GzotLzVI5HIoWLZguox2fHhpiSBNF8J/ArvxMpNIoutysrydREriLFeusq08i8IgLn3cB3WkiF6qKG5sYP/XeUZtWqLYkAAAAASUVORK5CYII=" />
                                    </div>
                                    <div className='col-10'>
                                        <p>
                                            Xưởng in - 118 Đường Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Tp Hồ Chí Minh
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='row mt-3'>
                                    <div className='col-2'>
                                        <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRIicWWTWxUVRTHf+feaSm2iWlROjPU1r7WKBA0UhZqIilgyhsJG6UxwZ0mEOPWREE6voAGdetKFyxMdFMiiQvmtX4AogQDJcZYTZrpAKXMTKm0Loq1H+8eF6V1WkodNnp2L+f87++e/0nuefAfhJRbqAGmGHltiPjgUoo8iXLy1h9m7yMfZadW0sZWShYOtD6oFa4DSBUcHQhFxYXWmEN/EV1aFcmJ6lq3B/jsniCjB5sS0zG7X+B5xbUC36IaOmvfagiyw6W119PepwK77gmiQXus4IbOAiFG30jQdE6C07N3E0dmpifmKj7UTqx0E92tbtFM8oHXiONi8nBu7Uo3W6RJez85Na+p1VHr2JE8PPjx0hpT+pEgNwxo8VBTc7kQgVCM8wU1oF0Kop1Y7cQuC5EAB9KjxvrlQlCXESXVEOQGQKeGg+ZNxfXevsL6lg+WhcyJNFR0Z7mM+Miac0BrMWhZqyKhiYyvhgugu5aFXAsa6rCxXpD2/mBjZTkQ+aRvBjjtItdhhYzgUglyl4C6edsXIPnAa7Susi8ZDPyuyG/3u8lny+0GlRARn4lbpxDZMkZrTantC5BkkBsCTCFo3WDQUETKn4vVEOiorxmZRDk/5XQHqqEqzy1Ahruan7gcPFyFaKiR80VdKKplQ25f8EaR5i1ABnH+uF193Fh5ZwFikPSqyLyAmhBI1dsrF4D662+3PFR2N0iIk5RYE6Libwz6p+PB4C8LEBG+RsRfZeQbhKdGJupXA71iXdndqNHQIX4iyP4KRPnAa5zPzUFcFILurCM7gepFaqq3oRqi5c/lz5vmrKAbhg88tmZmerbttoX/QOLvXr0MjBfwNqtIGCkpmbU9CNt0X1tFOZDK6un7gAETm97Z9P7QeGlu4YFU9Etxps0Zl7GOE4mj2dfzaS9bSI49DXx3hz0BpoC3mUh8RFPAJmBobt/weWmtlIroR+jGFdLeNWfYLsrLolQkD+cOwuL9AnQAN4EMuJ4pw5kqiKszPyZMLjH3RC2BlMb1Lu+VmJozM8JaI+4YaDeIDzwKegqV0FgZuEnV9xuD/ulSbT7t3dBI2ta9N3jtDrtKY92R3DEA7eRKYb33AJi4wJtjpuqH+UPzae/nWjMZAF9o0B4rcPUZVXkJZTw5MJhfdibLhXQT5dN8parnk0dyp0pzzrDHRLo1n/aOF9zQdpAscNLO6talC+xffyTyXd5ehP2Y2IuG6PHIOV/mrIsDvUBGZkxv4mh29G5nrNgJQGKktruYGN+tbnZQ0X6DyaD6atzm+kqH+7/H37kXqmhAqmUKAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='col-10'>
                                        <p>
                                            SĐT - 0915 788 336
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='row mt-3'>
                                    <div className='col-2'>
                                        <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADUElEQVRIib2TS2hcZRTHf+ebSdLZNMSNudOZmtzJRlNXIV24EKy4sOILfFSF4KraRRVBTBed69dJFRVKEF34ALH4ANFQK+5EaBWhtAhVSRE1M2nmcaPghLrJPL/jIpl0Ok2ah8E/XLj3+875/8453/3gf5BsNFAPjnSF/QsPKAyJ4XeP3V+JPdPYNshfdqC/4cyXgjpEvncqdwJEG+6hm1/N/bklSBj4hxzsBBBFEA6BNhR5ry3xGQCFd1fWlCvxiew7G4KUAl8FXl+vwk4pjMcz2Y0dQSnwdbOAG+WZrZhtVtH2D7WYeU29qbpUUGgHH1Enn69nIkYf9WzuC4Dw5dRb/TLzvFjcyn7rJWcHdvQ0zSci9CrcveHZtmn5LL9V5Uo14p4atLOVlU7yNnFTxJnTCJfLJvZEn1usLnUydJtz7v7rKkfL8Uzu/dVAZRPb3+cWP+hx5pu8TTyYtIWyAYg0u54FYp7Jjg3b6Vp7koG+zgc1sbW6GbbTNc9kx4DYsu9SJyrSLbBnvpk6VR7Xscpygmf/uAQc2czIyuN+b+j0JLBHRb5eLrQ1AzmBYa7Sw/nNmHaq0sN5EZNH5ERrbQWiqnXv2Mxh0OPAYpgefKw9WUFC6+8vplMvhYF/n3Zc5OX4RdDj3rGZw6pab+1d8wsDxDO5jwp24BfjZKoUpPZ6JnkkrF/eFUbkMxwGcWcc5mgpSB0tNd0Br+uWYujyrynuYWfcHQk7e7HT8zoIQMLOXszbxGjEdX8curmzRMQH3ohnspOtmFLgv0BEzoVuLovqP81IfTRpC+XV/Na88QlbWBDlHOBj9PF2wFLH2UlRdwBIgfkhYQsLa3mtCimP+73zgX9ahXsapj4St7nvVovzJmbPNpvREUTvDYPBU3/boZ0bgsyn/dsrPVxQ0Zw337dvt82X1qoQIPnKb8UFE7tLkULVuQthemi4M0YAioFvAVD5VcS9LWpe9CZmPryR+Woqpf0nESYVeQ70VoBdmaxdOXiBp0W03jDsS9qZnzcLAIhPZD8tpAenjTAFRBROwrXjmqvVGnuTNrclQEuJidxP9VpjFMi31q7+wko12h09WAz8/8K4KqXauq5RgIgypcIOgb7tIQDCj0aZ2ja/9fQvUsxYUmDnXdMAAAAASUVORK5CYII=" />
                                    </div>
                                    <div className='col-10'>
                                        <p>
                                            Email - trantuan.tanachau@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='contact_map mt-3 mt-lg-5'>
                        <div className='gmap_canvas'>
                            <iframe
                                id='gmap_canvas'
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.035535219081!2d106.6506207!3d10.8821991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d61fa0b1ef95%3A0x4d9a5a5c837ff7c1!2zxJDGsOG7nW5nIFRBIDEzLCBIaeG7h3AgVGjDoG5oLCBRdeG6rW4gMTIsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sfi!2sfi!4v1591992086072!5m2!1sfi!2sfi"
                                frameBorder={0}
                                scrolling='no'
                                marginHeight={0}
                                marginWidth={0}
                                title='Google maps'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
