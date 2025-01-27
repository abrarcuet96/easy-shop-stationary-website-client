import { Link } from "react-router-dom";
import logoImg from "./../../assets/logo.png";
const Banner = () => {
  return (
    <div
      className="hero h-[80vh] position"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/1sZmS8q/joshua-rodriguez-f7zm5-TDOi4g-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content">
        <div className="mb-72 mt-5">
          <div className="flex justify-between items-center w-[900px]">
            <div>
              <p className="text-white text-4xl flex">
                <img className="w-9 h-9 mr-2" src={logoImg} alt="" />
                <span className="font-bold">Easy</span>Shop
              </p>
            </div>
            <div>
              <Link
                className="text-white text-xl font-semibold px-5 py-3 border-t border-l border-b border-orange-600"
                to="/"
              >
                Login
              </Link>
              <Link
                className="text-white text-xl px-5 py-3 bg-orange-600 border border-orange-600"
                to="/"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="w-[900px] bg-[#181C14] p-6 mt-5 flex justify-around">
            <Link className="text-lg text-white" to="/">
              Home
            </Link>
            <span className="text-slate-700">|</span>
            <Link className="text-lg text-white" to="/">
              About Us
            </Link>
            <span className="text-slate-700">|</span>
            <Link className="text-lg text-white" to="/">
              Contact
            </Link>
            <span className="text-slate-700">|</span>
            <Link className="text-lg text-white" to="/">
              Features
            </Link>
            <span className="text-slate-700">|</span>
            <Link className="text-lg text-white" to="/">
              Blog
            </Link>
            <span className="text-slate-700">|</span>
            <Link className="text-lg text-white" to="/">
              Services
            </Link>
          </div>
          <p className="text-5xl mt-10 text-white">
            Your One-Stop <br />{" "}
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-orange-600">
              Stationery Destination
            </span>
          </p>
          <button className="text-white text-xl px-5 py-3 border border-white mt-7">
            Our Services
          </button>
          <div className="w-[900px] h-[350px] mt-20 absolute flex shadow-xl">
            <div className="w-[400px] bg-orange-500 flex flex-col p-10 text-white justify-center items-start gap-2">
              <p className="text-lg font-medium ">Our Journey</p>
              <p className="text-2xl font-black underline">
                10+ Years of Excellence in Stationery
              </p>
              <p>
                We take pride in providing high-quality stationery solutions to
                spark creativity and enhance productivity.
              </p>
              <button className="text-white text-lg px-5 py-3 border border-white mt-5">
                Learn More
              </button>
            </div>
            <div className="w-[500px] flex flex-col justify-center items-start  p-10 text-white bg-white">
              <div className="flex">
                <div className="flex flex-col justify-center items-start gap-2 text-black p-5">
                  <p className="text-4xl font-bold text-orange-500">1,000 +</p>
                  <p>Satisfied Customers Served.</p>
                </div>
                <div className="border-l h-full border-slate-300"></div>
                <div className="flex flex-col justify-center items-start text-black p-5">
                  <p className="text-4xl font-bold text-orange-500">5,000 +</p>
                  <p>Products Delivered with Care.</p>
                </div>
              </div>
              <div className="border-t w-full border-slate-300"></div>
              <div className="flex">
                <div className="flex-col justify-center items-start text-black p-5">
                  <p className="text-4xl font-bold text-orange-500">300 +</p>
                  <p>Unique Stationery Items Available.</p>
                </div>
                <div className="border-l h-full border-slate-300"></div>
                <div className="flex-col justify-center items-start text-black p-5">
                  <p className="text-5xl font-bold text-orange-500">10+</p>
                  <p>Years of Trust and Excellence in the Industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
