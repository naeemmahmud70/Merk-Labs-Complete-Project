import React from "react";
import "./ClientReview.css";
import quatation from "../../images/quatation.png";
import neon7 from "../../images/Neon 7.png";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-creative";

const ClientReview = () => {
  const reviewDetails = [
    {
      id: 1,
      date: " 1st February, 2019",
      sector: "Technology",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.postimg.cc/SQ2Znff0/John.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
    {
      id: 2,
      date: " 1st February, 2019",
      sector: "Technology",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.postimg.cc/SQ2Znff0/John.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
    {
      id: 3,
      date: " 1st February, 2019",
      sector: "Technology",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.postimg.cc/SQ2Znff0/John.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
  ];
  return (
    <div>
      <div className="MarginTop">
        <div className="text-center mt-5">
          <p className="client-review">Our Client Review</p>
          <p className="text-white">
            Subscribe to our newsletter for daily/weekly <br /> update of our
            products and services.
          </p>
        </div>

        <div className="row d-flex align-items-center  mt-5">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
            autoplay={{ delay: 2000 }}
            spaceBetween={1}
            effect="coverflow"
            centeredSlides="true"
            grabCursor="true"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
              2560: {
                slidesPerView: 4,
              },
            }}
          >
            {reviewDetails.map((details) => (
              <SwiperSlide>
                <div className="col-md-12 col-sm-12 review-card first-review p-4">
                  <p className="text-secondary">
                    {details.date} | {details.sector}
                  </p>
                  <div className="text-center">
                    <div className="d-flex">
                      <span>
                        <img className="" src={quatation} alt="" />
                      </span>
                      <p className="textWhite">{details.review}</p>
                    </div>
                    <div className="icon-transform-effect">
                      <img src={details.image} alt="" />
                    </div>
                    <h3 className="text-white">{details.name}</h3>
                    <h6 className="textWhite">{details.occupation}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <img className="img-fluid neon7" src={neon7} alt="" />
      </div>
    </div>
  );
};

export default ClientReview;
