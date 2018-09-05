import React from "react";
import Slider from "react-slick";
import {Cell} from "react-mdl";

class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            fade: true,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?cs=srgb&dl=accounting-alone-application-938965.jpg&fm=jpg" alt="" />
                    <img src="https://www.doscredobank.kg/sites/default/files/logo.png"
                         className="logo"
                    />

                    <div className="banner-text">
                        <h1>На рынке банковских услуг более 20 лет!</h1>
                        <hr/>
                        <p>
                            Переводы | Кредиты | Депозиты | Карты | Интернет-банкинг | Расчетно-кассовое обслуживание
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/908288/pexels-photo-908288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;