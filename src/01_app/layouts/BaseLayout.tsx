import { Outlet } from "react-router-dom";
import { Footer } from "@/03_widgets/Footer";
import { Header } from "@/03_widgets/Header";

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
