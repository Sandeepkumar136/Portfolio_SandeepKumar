import React from "react";
import Slider from "react-slick";
import Images_Exported from "../assets/Pictures/ImageExporter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Resume = () => {
  const ResumeImagesData = [
    Images_Exported.resume_pages.page_1,
    Images_Exported.resume_pages.page_2,
    Images_Exported.resume_pages.page_3,
    Images_Exported.resume_pages.page_4,
    Images_Exported.resume_pages.page_5,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="resume-wrapper">
        <Slider {...settings}>
          {ResumeImagesData.map((src, i) => (
            <div key={i} className="slider-card">
              <img
                src={src}
                alt={`Resume Page ${i + 1}`}
                className="resume-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="resume-links-container">
        <a href={Images_Exported.resumedoc} download={Images_Exported.resumedoc} className="resume-links doc">
          <i class="bx bxs-file-doc"></i>
        </a>
        <a href={Images_Exported.resumepdf} download={Images_Exported.resumepdf} className="resume-links pdf">
          <i class="bx bxs-file-pdf"></i>
        </a>
        <a href={Images_Exported.resumepdf} rel="noreferrer" target="_blank" className="resume-links img">
          <i class="bx bxs-file-image"></i>
        </a>
      </div>
    </>
  );
};

export default Resume;
