import React from 'react';
import '../../assets/styles/Footer.scss';
import Logo from '../../assets/images/Logo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-info py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-12 my-2 my-md-3 my-lg-5">
                                    <img className="navbar-brand" src={Logo} alt="logo Tân Á Châu"/>
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-12">
                                    <p>Công ty TNHH In ấn - Thiết kế - Quảng cáo Tân Á Châu chuyên cung cấp các giải pháp thiết kế, in ấn uy tín cho doanh nghiệp. Sản phẩm Tân Á Châu được chứng nhận tiêu chuẩn FSC quốc tế, chuyên các sản phẩm in ấn bao bì cho các doanh nghiệp trong và ngoài nước.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-5 mt-3 mt-lg-5">
                            <ul className="footer-list">
                                <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                    <p className="info">
                                        <span>
                                            <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADL0lEQVRIib2SW2hcVRSGv7Vnoolo+5BW50xIdWZCRCpU9MELnagU8qBPLfYpBR8MUppW+mRTaMZtoyatFQJGEKkIYhVs8YY2T5qCaPsmaLUXM1MM7ZlciBe0JjHn7OXDTNJJnDN16mW9rf3/+//OWvvA/1Dyd0x+XyorQg+YrKJrgGkRPndOhlv681/8I4jah+JFHX8Z1U5g0JnYSIu/evJS8pdbTKiPINqrcDxp1u0WeyKIyonXgpQA3Bo3N2y42X77W4V0EXhtyq5/O3Bzx3w3PgTsrHsSvy+VReSNuGm6awVgWU0/fftNC40LX6vKtqjVRU4iQo+iBxYBvk2vw3EYuB84iaE7aQvjaw+e+9XPZQZFtAeoCjFREDBZZ2IjS23I6wqfmt8vJ4DRMrBs1RGgIzIpSlC0eXaG6SujcW+DaXolcWjycsNcwzBw36I0j5sCmuuGAH5js7ZW9KcCN7tryq6/caHxj6eAU4tCPDCtoP61QM7GQ3d3hbMbeDhws0VUOsp9SRK5B+RMVFD0L6x8pGIeA94FSNrCONBZzSroVtAP657ExOQ90E7ftq+J/BCguLdtLcImWYh9UDckYfNTKrwvYbCjFsRd53YCx7yBsekoT603wYh5UYWeGdu2qpr+4570alG248KXaubUEj079p0Kx+dV91TT5xrpFeHj5HM/RD76VSEALojvQ/XJSduerjyftO1plO4giOeulrHs7/KfSQ+g9FYcfentP7+x2JceCF1wWGGTgAKELngVeKH1+fOX/FzmBOiDS7eEweSzhb1X2nKpxRRd+oIx8mjC5k9XwnUrseId6ZOiMuz1598s5jKPK7rDO1N4QI4SVnonbOZO5/QTzxRSYnFQsa6J8LYs8NNKAIAcJTTKEyp6yLepDkUPqprtKwEACZs/LfBzkdTGxbMliEqsS5AjVVZautxf+AbVIZyMAkMt/WNfRXlB3sKZbcsg3+9qux7cltDIO9EXwYtdGBTY75nCgVq+Uo7bUsotl5/LbPZz6c9qXay3/L7UqJ/LbIaldWmXopGrusY6AtoFIDO2bdW8cxNA078MAZibN877D3L/Wn8CluBD3IpqpPoAAAAASUVORK5CYII="/>
                                        </span> 
                                        Văn phòng - 143 Đường TA13, Phường Thới An, Quận 12, Tp Hồ Chí Minh
                                    </p>
                                </li>
                                <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                    <p className="info">
                                        <span>
                                            <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAABcElEQVRIie2Uv04CQRDGf7NHQ6PRhoix8DS+BK2FJhbW9D4D3XmAtYWttb2NxhhaS59AwMJAtMHEhkZ2LLgjcuE4FgiJiV85t/P9udlZWAFkUrET+KHAuSuZQnW71g6T9ZxrQxo6gZ961sxKsgj+RZwgAG/h3n5uYE+tiAcgyiGACo2ZiRI9RnXw7ZnbnbDVzAF4Vh9U5NHAVyT9HDnYcLA71qMia57Ve+AAgG7g68xkDoh5U/dkHryH/om13AiUt2rtu7i+1MGrRSPWsT+z1CSR+/VkfSVXeGKSP/lAZs6kG+yeKbKZ9l3QXrH2ej2NI3vwavJGNHUpVU0/iyI3dEOzG/iXCh8AopRUeBpatX2LfCYbJyUQpdQJ/ErEWQBeRiLGmiNrtCxo9CSQz0oyMYGQN/GzotLzVI5HIoWLZguox2fHhpiSBNF8J/ArvxMpNIoutysrydREriLFeusq08i8IgLn3cB3WkiF6qKG5sYP/XeUZtWqLYkAAAAASUVORK5CYII="/>
                                        </span> 
                                        Xưởng in - 118 Đường Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, Tp Hồ Chí Minh
                                    </p>
                                </li>
                                <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                    <p className="info">
                                        <span>
                                            <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADY0lEQVRIid2WTWhcZRSGn/ebmaSZJDVBbGYmaZpMfjWuqosuDIKKii4FN4KuXLhQEETRkvE2moVgNwpu3SiCCELwb6GuirqodGNsk5iJ+buTWGyav8nf3O+4yERqmMbQ6aovXLiX7znnuefczYU7Ldq/KeSyTxs0CdvxTstE2pT388uJZGEgGNs5rMlYMFDTvFtMm3NtxKzOeWs2VCPHcjrIfwMQ34cNPgYumikhTxLZXcRINfvNu8NcdgmYBF0WfnyPd31g9wI9+M0WYvwtrIBn1UxFxK55HgRO/EcEiMheyoxMz9z4ttNBx7EErj0OveZ9n6Fn92D/uZxGd0uMb6242Z4P/9i+sS4823mKmC7uP8cnX+6ubWgqnTFIVFpLZ/DnFjBRvr4Kc13NAOnh/PnD1llOojDU8fC1WP3P8fomP4pcCkgeobBiwiD7EJ6nMsP5tw4cJZH7oDkqhg7xWI1zg8DKrUgKQ90DeHsNeD7MZZ87cLxS49wg0uMOcNsUS7ci+SvoSJn8j0KXwN4E3j4oK/d28cotjpZS5B5B/Joezp8DWAg6V2Q8A3x6kHXViLDoEnA6HOocBGgNpkcz56ZfqIRWJcq8O3PZ4FXEl+FQ9usw6D59M7a6iYDW4fxncZfsQPYT3n8fBl1PVuKq+kaLQdf9hu8/EYx9AYws5LJ5eXsF+O62igDM66P5oPuXVtoWC37uAbBrlbiqVpcKpn4T9p7z/krBz66DnYmi+BuV2KonSg9Pny8EnTMW6cXMO/knbsZVLQLQevHbWEPdhcOY2yJKvb+0AWwcVRQR0ydhrquAbFvounmWTLZgMKtIE5mRqflCGTZQeLarzWLWK2iXqVWOFsOaMNWCpYFov7nCXNbHXd3xnajYFYvRY161mOol32hSG6ZW4dsMekF1wFa59hjYpmDCcPPIFmQ2b+bWkG3I2XYUMVkTS06V/Oaqwlz2wp5ZS8h2wdYxbRisClsQCmXMrl13Ew0NHCdeug+AUvz39XVWG5t8r4l2wzKGWgXHkdWDGjAlwFoAp6uv9zXuJkuPmrc6mRqR1WPU4rgHSGGcBE4CbcAMcKU8UT9wCpgH5hBzwCKeq4htTBsmW5PTZqIY/+Hfn5P/SxhkkpDst8h6y1sfV6w4ngnC4lF73Fn5B5Ufa1C/ahqkAAAAAElFTkSuQmCC"/>
                                        </span> 
                                        MST - 0315542574
                                    </p>
                                </li>
                                <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                    <p className="info">
                                        <span>
                                            <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRIicWWTWxUVRTHf+feaSm2iWlROjPU1r7WKBA0UhZqIilgyhsJG6UxwZ0mEOPWREE6voAGdetKFyxMdFMiiQvmtX4AogQDJcZYTZrpAKXMTKm0Loq1H+8eF6V1WkodNnp2L+f87++e/0nuefAfhJRbqAGmGHltiPjgUoo8iXLy1h9m7yMfZadW0sZWShYOtD6oFa4DSBUcHQhFxYXWmEN/EV1aFcmJ6lq3B/jsniCjB5sS0zG7X+B5xbUC36IaOmvfagiyw6W119PepwK77gmiQXus4IbOAiFG30jQdE6C07N3E0dmpifmKj7UTqx0E92tbtFM8oHXiONi8nBu7Uo3W6RJez85Na+p1VHr2JE8PPjx0hpT+pEgNwxo8VBTc7kQgVCM8wU1oF0Kop1Y7cQuC5EAB9KjxvrlQlCXESXVEOQGQKeGg+ZNxfXevsL6lg+WhcyJNFR0Z7mM+Miac0BrMWhZqyKhiYyvhgugu5aFXAsa6rCxXpD2/mBjZTkQ+aRvBjjtItdhhYzgUglyl4C6edsXIPnAa7Susi8ZDPyuyG/3u8lny+0GlRARn4lbpxDZMkZrTantC5BkkBsCTCFo3WDQUETKn4vVEOiorxmZRDk/5XQHqqEqzy1Ahruan7gcPFyFaKiR80VdKKplQ25f8EaR5i1ABnH+uF193Fh5ZwFikPSqyLyAmhBI1dsrF4D662+3PFR2N0iIk5RYE6Libwz6p+PB4C8LEBG+RsRfZeQbhKdGJupXA71iXdndqNHQIX4iyP4KRPnAa5zPzUFcFILurCM7gepFaqq3oRqi5c/lz5vmrKAbhg88tmZmerbttoX/QOLvXr0MjBfwNqtIGCkpmbU9CNt0X1tFOZDK6un7gAETm97Z9P7QeGlu4YFU9Etxps0Zl7GOE4mj2dfzaS9bSI49DXx3hz0BpoC3mUh8RFPAJmBobt/weWmtlIroR+jGFdLeNWfYLsrLolQkD+cOwuL9AnQAN4EMuJ4pw5kqiKszPyZMLjH3RC2BlMb1Lu+VmJozM8JaI+4YaDeIDzwKegqV0FgZuEnV9xuD/ulSbT7t3dBI2ta9N3jtDrtKY92R3DEA7eRKYb33AJi4wJtjpuqH+UPzae/nWjMZAF9o0B4rcPUZVXkJZTw5MJhfdibLhXQT5dN8parnk0dyp0pzzrDHRLo1n/aOF9zQdpAscNLO6talC+xffyTyXd5ehP2Y2IuG6PHIOV/mrIsDvUBGZkxv4mh29G5nrNgJQGKktruYGN+tbnZQ0X6DyaD6atzm+kqH+7/H37kXqmhAqmUKAAAAAElFTkSuQmCC"/>
                                        </span> 
                                        SĐT - 0915 788 336
                                    </p>
                                </li>
                                <li className="footer-item mx-sm-1 mx-md-3 mx-lg-5">
                                    <p className="info">
                                        <span>
                                            <img alt="Tân Á Châu email" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADUElEQVRIib2TS2hcZRTHf+ebSdLZNMSNudOZmtzJRlNXIV24EKy4sOILfFSF4KraRRVBTBed69dJFRVKEF34ALH4ANFQK+5EaBWhtAhVSRE1M2nmcaPghLrJPL/jIpl0Ok2ah8E/XLj3+875/8453/3gf5BsNFAPjnSF/QsPKAyJ4XeP3V+JPdPYNshfdqC/4cyXgjpEvncqdwJEG+6hm1/N/bklSBj4hxzsBBBFEA6BNhR5ry3xGQCFd1fWlCvxiew7G4KUAl8FXl+vwk4pjMcz2Y0dQSnwdbOAG+WZrZhtVtH2D7WYeU29qbpUUGgHH1Enn69nIkYf9WzuC4Dw5dRb/TLzvFjcyn7rJWcHdvQ0zSci9CrcveHZtmn5LL9V5Uo14p4atLOVlU7yNnFTxJnTCJfLJvZEn1usLnUydJtz7v7rKkfL8Uzu/dVAZRPb3+cWP+hx5pu8TTyYtIWyAYg0u54FYp7Jjg3b6Vp7koG+zgc1sbW6GbbTNc9kx4DYsu9SJyrSLbBnvpk6VR7Xscpygmf/uAQc2czIyuN+b+j0JLBHRb5eLrQ1AzmBYa7Sw/nNmHaq0sN5EZNH5ERrbQWiqnXv2Mxh0OPAYpgefKw9WUFC6+8vplMvhYF/n3Zc5OX4RdDj3rGZw6pab+1d8wsDxDO5jwp24BfjZKoUpPZ6JnkkrF/eFUbkMxwGcWcc5mgpSB0tNd0Br+uWYujyrynuYWfcHQk7e7HT8zoIQMLOXszbxGjEdX8curmzRMQH3ohnspOtmFLgv0BEzoVuLovqP81IfTRpC+XV/Na88QlbWBDlHOBj9PF2wFLH2UlRdwBIgfkhYQsLa3mtCimP+73zgX9ahXsapj4St7nvVovzJmbPNpvREUTvDYPBU3/boZ0bgsyn/dsrPVxQ0Zw337dvt82X1qoQIPnKb8UFE7tLkULVuQthemi4M0YAioFvAVD5VcS9LWpe9CZmPryR+Woqpf0nESYVeQ70VoBdmaxdOXiBp0W03jDsS9qZnzcLAIhPZD8tpAenjTAFRBROwrXjmqvVGnuTNrclQEuJidxP9VpjFMi31q7+wko12h09WAz8/8K4KqXauq5RgIgypcIOgb7tIQDCj0aZ2ja/9fQvUsxYUmDnXdMAAAAASUVORK5CYII="/>
                                        </span> 
                                        <span>
                                            Email - trantuan.tanachau@gmail.com
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 mt-3 mt-lg-5">
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