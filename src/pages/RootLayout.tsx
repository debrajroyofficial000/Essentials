import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="bg-skin-100 min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
