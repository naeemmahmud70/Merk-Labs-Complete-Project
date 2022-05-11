import React, { useEffect } from "react";
import "./ClientReview.css";
import quatation from "../../images/quatation.png";
import neon7 from "../../images/Neon 7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Navigation, Pagination, A11y, Autoplay, Grid} from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const ClientReview = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const reviewDetails = [
    {
      id: 1,
      date: "01 FEB, 2019",
      Technology: "TECHNOLOGY",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://i.postimg.cc/VvRmscyR/Group-5.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
    {
      id: 2,
      date: "01 FEB, 2019",
      Technology: "TECHNOLOGY",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://i.postimg.cc/VvRmscyR/Group-5.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
    {
      id: 3,
      date: "01 FEB, 2019",
      Technology: "TECHNOLOGY",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://i.postimg.cc/VvRmscyR/Group-5.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
    {
      id: 4,
      date: "01 FEB, 2019",
      Technology: "TECHNOLOGY",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://i.postimg.cc/VvRmscyR/Group-5.png",
      name: "JOHN SMITH",
      occupation: "Founder of Awesomeux Technology",
    },
  ];
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

        <div className="row d-flex justify-content-center mt-5">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, Grid]}
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
                slidesPerView: 2,
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
                <div
                  data-aos="fade-up"
                  className="col-md-12 col-sm-12 review-card p-4"
                >
                  <p className="text-secondary">
                    {details.date} | {details.Technology}
                  </p>
                  <div className="text-center">
                    <div className="d-flex">
                      <span>
                        <img className="" src={quatation} alt="" />
                      </span>
                      <p className="textWhite">{details.review}</p>
                    </div>
                    <div className="icon-transform-effect">
                      <img src={details.img} alt="" />
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
