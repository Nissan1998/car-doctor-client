import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useScrollTop from "../../CustomeHook/useScrollTop";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const pathname = useLocation();
  const { user } = useContext(AuthContext);
  useScrollTop(pathname);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      img,
      email,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);
    fetch("https://car-doctor-server-olive-xi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3 className="text-center text-4xl font-bold">
        Booke Your service Service:-{title}{" "}
      </h3>
      <form onSubmit={handleBookService}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deu Amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + price}
                name="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              className="w-full h-56 input input-bordered"
              placeholder="Your Message"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block bg-orange-600"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
