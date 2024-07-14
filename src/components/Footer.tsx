import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-skin-700 text-skin-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Essentials</h1>
          </div>
          <div className=" flex justify-center gap-8">
            <a
              href="https://x.com/DebrajR57997"
              className="text-skin-50 hover:text-skin-100 font-medium text-2xl"
            >
              <AiFillTwitterSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/debraj-roy-a08854299/"
              className="text-skin-50 hover:text-skin-100 font-medium text-2xl"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/debrajroyofficial000"
              className="text-skin-50 hover:text-skin-100 font-medium text-2xl"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="text-md">
            <p>
              &copy; {new Date().getFullYear()} Essentials. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
