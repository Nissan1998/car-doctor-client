import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item rounded-xl relative w-full">
          <img src={banner5} className="w-full rounded-xl" />
          <div className="absolute flex rounded-xl  gap-4 items-center pl-14   left-0 bg-gradient-to-r from-black to-[rgba(21,21,21,0)] w-full h-full top-0 bottom-10">
            <div className="text-white">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex  gap-4  transform -translate-y-1/2 left-5 right-5 bottom-10">
            <div className="text-white ">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="my-4">
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex  gap-4  transform -translate-y-1/2 left-5 right-5 bottom-10">
            <div className="text-white">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute flex  gap-4  transform -translate-y-1/2 left-5 right-5 bottom-10">
            <div className="text-white">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex  gap-4  transform -translate-y-1/2 left-5 right-5 bottom-10">
            <div className="text-white">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full" />
          <div className="absolute flex  gap-4  transform -translate-y-1/2 left-5 right-5 bottom-10">
            <div className="text-white">
              <h1 className="text-6xl font-bold">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but <br />
                the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline ml-5 btn-warning">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
