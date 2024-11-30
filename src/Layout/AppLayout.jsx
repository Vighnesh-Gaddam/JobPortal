import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* Grid Background */}
      <div className="grid-background"></div>
      {/* Main Content */}
      <main className="min-h-screen container mx-auto px-8">
        <Header />
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Vighnesh Gaddam
      </footer>
    </div>
  );
};

export default AppLayout;
