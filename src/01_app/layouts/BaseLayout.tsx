import { Footer } from "@/03_widgets/footer";
import { Header } from "@/03_widgets/header";
import { Outlet } from "react-router-dom";

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
