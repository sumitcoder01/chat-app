import { Navbar } from "../../specific/header/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLoyout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
