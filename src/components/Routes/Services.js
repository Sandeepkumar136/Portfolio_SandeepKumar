import React from 'react'
import Loader from '../contents/Loader';
import AlertMessage from '../contents/AlertMessage';
import FormServices from '../contents/FormServices';
import services from '../Data/Json/Services';

const Services = () => {
    const AlertData = [
    {
      heading: "Privacy Notice & Legal Assurance",
      description:
        "Your information is securely handled with utmost confidentiality. By submitting, you agree to our privacy terms, ensuring lawful use and protection of your personal data with integrity and respect.",
    },
  ];
  return (
    <div>
      <Loader/>
            <AlertMessage
        heading={AlertData[0].heading}
        description={AlertData[0].description}
      />
      <div className="services-container">
        {
          services.map((e, i)=>(
            <div key={i} className="services-contain">
                <i className={`services-card-icon ${e.icon}`}></i>
                <h3 className="heading-services">
                  {e.name}
                </h3>
              <p className="text-services">
                {e.alt}
              </p>
              <button type="button" onClick={toString(e.link)} className="services-card-btn">Book Now</button>
            </div>
          ))
        }
      </div>
        <FormServices/>
    </div>
  )
}

export default Services; 