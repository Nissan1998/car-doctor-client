import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, title, img, price, service_id, facility, description } = service;

  return (
    <div>
      <div className="card w-96 h-full  bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 font-bold"> price:- ${price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn bg-orange-600">BOOK NOW ❯</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
