import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

export default function Loyout() {
  return (
    <HelmetProvider>
    <CssBaseline />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Outlet />
    </HelmetProvider>
  )
}