import aboutImage from "../../public/assets/about.jpg";
const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-skin-500 text-skin-100 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Essentials
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop shop for all your needs
          </p>
          <a
            href="/products"
            className="bg-skin-700 text-skin-100 px-6 py-3 rounded hover:bg-skin-300 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-skin-100 text-skin-700">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-lg mb-6 text-center">
            At Essentials, we are dedicated to providing the highest quality
            products at the best prices. Our mission is to make shopping easy
            and enjoyable for everyone.
          </p>
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 bg-skin-300 text-skin-700">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-lg mb-6 text-center">
            Have any questions? We'd love to hear from you! Reach out to us
            through the form below.
          </p>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skin-700"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skin-700"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skin-700"
                id="message"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
          </form>
          <div className="text-center">
            <button className="bg-skin-700 text-skin-100 px-6 py-3 rounded hover:bg-skin-500 transition duration-300">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
