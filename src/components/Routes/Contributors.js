import React from "react";
import Chart from "../contents/Chart";
import Client_Data from "../assets/Arrays/ClientRowData";
import Images from "../assets/Pictures/ImageProvider";


const StarRating = ({ rating }) => {
  const totalStars = 5;

  const getStarClass = (index) => {
    if (rating >= index + 1) {
      return 'star full';
    } else if (rating >= index + 0.5) {
      return 'star half';
    } else {
      return 'star empty';
    }
  }



  return (
<div className="star-rating">
      {
        Array.from({ length: totalStars }, (_, index) => (
          <span key={index} className={getStarClass(index)}>&#9733;</span>
        ))
      }
    </div>
  )
};

// Contributors Component
const Contributors = () => {
  const ContRowdata = [
    {
      img: Images.Partners.Partner_One,
      Partner: "Rakesh Sharma",
      job: "Frontend Developer",
      text: "Frontend developers design and implement user interfaces, ensuring websites are responsive, visually appealing, and provide excellent user experiences.",
    },
    {
      img: Images.Partners.Partner_Two,
      Partner: "Sumit Goshwami",
      job: "Backend Developer",
      text: "Backend developers build and maintain server-side logic, databases, and APIs, ensuring smooth data flow and efficient functionality behind the scenes.",
    },
    {
      img: Images.Partners.Partner_Three,
      Partner: "Ranjan Mishra",
      job: "Data Analytics",
      text: "Data analysts interpret data, identify trends, and provide insights to help organizations make informed decisions and improve performance.",
    },
    {
      img: Images.Partners.Partner_four,
      Partner: "Kiran Gupta",
      job: "Backend Developer",
      text: "Backend developers manage server-side programming, databases, and API integrations, ensuring seamless communication between the client and server systems.",
    },
  ];

  return (
    <div>
      <div className="heading-inf">Contributors</div>

      <div className="cont-container">
        {ContRowdata.map((item, index) => (
          <div key={index} className="cont-card">
            <div className="logo-contain-cont">
              <img src={item.img} alt={item.Partner} className="logo-cont" />
              <div className="title-contain-cont">
                <h5 className="title-cont">{item.Partner}</h5>
                <p className="subtitle-cont">{item.job}</p>
              </div>
            </div>
            <p className="text-cont">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="heading-inf">Contribution Chart</div>
      <div className="con-chart">
        <Chart/>
      </div>

      <div className="heading-inf">Top Client Reviews</div>

      <div className="client-container">
        {Client_Data.map((client, index) => (
          <div key={index} className="cli-contain">
            <div className="cli-logo-contain">
              <img src={client.img} alt={client.client} className="cli-logo" />
              <h5 className="title-cli">{client.client}</h5>
            </div>
            <StarRating rating={parseFloat(client.star)} />
            <p className="text-cli">{client.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;