import React from "react";
import "./ClientReview.css";
import quatation from "../../images/quatation.png";
import neon7 from "../../images/Neon 7.png";
import John from "../../images/John.png";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const ClientReview = () => {
  return (
    <div>
      <div className="container MarginTop">
        <div className="text-center mt-5">
          <p className="client-review">Our Client Review</p>
          <p className="text-white">
            Subscribe to our newsletter for daily/weekly <br /> update of our
            products and services.
          </p>
        </div>

        <div className="row d-flex align-items-center  mt-5">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{ delay: 2000 }}
            spaceBetween={1}
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
            <SwiperSlide>
              <div className="col-md-12 col-sm-12 review-card first-review p-4">
                <p className="text-secondary">01 FEB, 2019 | TECHNOLOGY</p>
                <div className="text-center">
                  <div className="d-flex">
                    <span>
                      <img className="" src={quatation} alt="" />
                    </span>
                    <p className="textWhite">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="icon-transform-effect">
                    <img src={John} alt="" />
                  </div>
                  <h3 className="text-white">JOHN SMITH</h3>
                  <h6 className="textWhite">Founder of Awesomeux Technology</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="second">
              <div className="col-md-12 col-sm-12 review-card second-review p-4">
                <p className="text-secondary">01 FEB, 2019 | TECHNOLOGY</p>
                <div className="text-center">
                  <div className="d-flex">
                    <span>
                      <img className="" src={quatation} alt="" />
                    </span>
                    <p className="textWhite">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="icon-transform-effect">
                    <img src={John} alt="" />
                  </div>
                  <h3 className="text-white">JOHN SMITH</h3>
                  <h6 className="textWhite">Founder of Awesomeux Technology</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-12 col-sm-12 review-card third-review p-4">
                <p className="text-secondary">01 FEB, 2019 | TECHNOLOGY</p>
                <div className="text-center">
                  <div className="d-flex">
                    <span>
                      <img className="" src={quatation} alt="" />
                    </span>
                    <p className="textWhite">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="icon-transform-effect">
                    <img src={John} alt="" />
                  </div>
                  <h3 className="text-white">JOHN SMITH</h3>
                  <h6 className="textWhite">Founder of Awesomeux Technology</h6>
                </div>
              </div>
            </SwiperSlide>
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
