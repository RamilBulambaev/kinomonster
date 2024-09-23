import { Outlet } from "react-router-dom";
import { Header } from "@/03_widgets/Header";
import { Footer } from "@/03_widgets/Footer";

function BaseLayout() {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default BaseLayout;
