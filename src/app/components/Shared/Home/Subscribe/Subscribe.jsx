"use client";

import toast from "react-hot-toast";
import Container from "../../Container";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    if (email) {
      toast.success("thanks for stay with us");
      form.reset();
    }
  };
  return (

    <section className="backdrop-blur-xl bg-white/10 my-10">
      <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2

            className="mb-4 text-5xl text-center tracking-tight font-extrabold text-white stroke  "
          >
            Subscribe to our Newsletter for latest news.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl text-center">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form

            onSubmit={handleSubscribe}
          >
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium "
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  className="block backdrop-blur-sm bg-white/10 px-3 py-[10px] pl-10 w-full  text-white  rounded-lg border border-gray-300 focus:outline-none sm:rounded-none sm:rounded-l-lg "
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm md:text-left text-center text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Subscribe;
