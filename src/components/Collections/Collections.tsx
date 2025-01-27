import { stationeryItems } from "./collections.data";

const Collections = () => {
  return (
    <>
      <div className="grid gap-4 mt-40">
        <div className="w-full px-6 py-16">
          <div className="max-w-screen-lg mx-auto">
            <div className="hero h-[25vh]">
              <div className="hero-content text-center">
                <div>
                  <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181C14] leading-tight">
                    Explore Our <br />
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-orange-600">
                      Reguler Collections
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl font-medium text-gray-600">
                    Discover the perfect blend of style, functionality, and
                    quality in our curated collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            {stationeryItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 relative group"
              >
                <img
                  className="w-full h-64 object-cover transform transition-all duration-200 group-hover:blur-lg"
                  src={item.image}
                  alt="Pens and Pencils"
                />
                <div className="absolute -bottom-20 left-0 w-full px-4 py-2 bg-gradient-to-b from-white to-transparent group-hover:bottom-10 transition-all duration-300 flex flex-col justify-center items-center">
                  <p className="text-sm font-medium text-center rounded-md mt-3 text-orange-600 border border-orange-300 bg-orange-50 px-3 py-1">
                    {item.title}
                  </p>

                  <p className="text-sm text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-600 mt-3"
                  >
                    View
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Collections;
