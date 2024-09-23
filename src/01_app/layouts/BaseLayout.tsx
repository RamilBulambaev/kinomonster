import { Outlet } from "react-router-dom";
import { Header } from "@/03_widgets/Header_temp";
import { Footer } from "@/03_widgets/Footer_temp";

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
