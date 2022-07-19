import hero from "../assets/hero.png";

export default function Landing() {
  return (
    <>
      <img src={hero} alt="netflix movies" className="landing-img" />
      <section className="h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-white w-[686px] text-[64px]">
          Unlimited movies, TV shows and more.
        </h1>
        <h4 className="text-[26px]">Watch anywhere. Cancel anytime.</h4>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="items-center justify-center sm:flex"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
          />
          <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
