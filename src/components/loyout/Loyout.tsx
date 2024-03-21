import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function Loyout() {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Outlet />
    </>
  )
}