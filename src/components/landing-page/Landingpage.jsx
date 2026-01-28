const Landingpage = () => {
  return (
    <div className="max-w-11/12 mx-auto text-center ">
      <div
        className="hero w-full h-100 md:h-100 lg:h-150 rounded-3xl my-10"
        style={{
          backgroundImage: "url(/src/assets/image/banner.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="hero-overlay rounded-4xl"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="text-2xl lg:text-5xl font-bold lg:max-w-4xl mx-auto">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="my-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-[#150B2B] bg-[#0BE58A] mb-10 mt-5 mr-5 rounded-2xl">
              Explore Now
            </button>
            <button className="btn bg-transparent outline border-none text-white  mb-10 mt-5  rounded-2xl hover:bg-[#0BE58A] hover:outline-none hover:text-[#150B2B]">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
