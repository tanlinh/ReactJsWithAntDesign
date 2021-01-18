import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../assets/images/advanced-option.jpg';
function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src={Image1} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src={Image1} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src={Image1} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <img src={Image1} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                        <li><a href="#"><i class="fab fa-google"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider