import { Outlet } from "react-router-dom";
import { AdminSideBar } from "../../specific/adminSideBar/AdminSideBar";

export default function AppLoyout() {
    return (
      <>
      <AdminSideBar />
      <Outlet />
      </>
    )
  }
  