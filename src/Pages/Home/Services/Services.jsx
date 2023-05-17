import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("https://car-doctor-server-olive-xi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <h4 className="font-bold text-lg text-orange-600 text-center">Service</h4>
      <h3 className="text-4xl font-bold text-center">Our Service Area</h3>
      <p className="text-center mt-2">
        The majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which do not look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
