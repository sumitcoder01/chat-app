import { Suspense, lazy, useState } from "react";
import { Navbar } from "../../specific/header/Navbar";
import { Outlet } from "react-router-dom";
import { Backdrop } from "@mui/material";

const SearchUser = lazy(() => import('../../specific/searchUser/SearchUser'));
const Notifications = lazy(() => import('../../specific/notifications/Notifications'));
const CreateGroups = lazy(() => import('../../specific/createGroups/CreateGroups'));
const DialogModal = lazy(() => import('../../shared/modals/DialogModal'));


export default function AppLoyout() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isNotifications, setIsNotifications] = useState<boolean>(false);
  const [isGroups, setIsGroups] = useState<boolean>(false);

  const toggalSearch = () => setIsSearch(prev => !prev);
  const toggalNotifications = () => setIsNotifications(prev => !prev);
  const toggalGroups = () => setIsGroups(prev => !prev);

  return (
    <>
      <Navbar toggalSearch={toggalSearch} toggalNotifications={toggalNotifications} toggalGroups={toggalGroups} />
      <Outlet />
      {isSearch && <Suspense fallback={<Backdrop open />}><DialogModal title={"Find Users"} open={isSearch && !isNotifications && !isGroups} handleClose={toggalSearch} ><SearchUser /></DialogModal></Suspense>}
      {isNotifications && <Suspense fallback={<Backdrop open />}><DialogModal title={"Notification"} open={isNotifications && !isSearch && !isGroups} handleClose={toggalNotifications} ><Notifications /></DialogModal></Suspense>}
      {isGroups && <Suspense fallback={<Backdrop open />}><DialogModal title={"Create Groups"} open={isGroups && !isSearch && !isNotifications} handleClose={toggalGroups} ><CreateGroups /></DialogModal></Suspense>}
    </>
  )
}
