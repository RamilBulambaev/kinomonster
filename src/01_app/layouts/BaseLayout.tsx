import { Header } from "@/03_widgets/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
    <Header />
      <Outlet />
    </>
  );
}

export default BaseLayout;
