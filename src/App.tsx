import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loyout from './components/loyout/Loyout';
import AppLoyoutSkeleton from './components/loyout/appLoyout/AppLoyoutSkeleton';
import AuthLoyoutSkeleton from './components/loyout/authLoyout/AuthLoyoutSkeleton';
import AdminLoyoutSkeleton from './components/loyout/adminLoyout/AdminLoyoutSkeleton';
import { useAuth } from './context/authContext';


const AppLoyout = lazy(() => import('./components/loyout/appLoyout/AppLoyout'));
const AdminLoyout = lazy(() => import('./components/loyout/adminLoyout/AdminLoyout'));
const Protected = lazy(() => import('./components/protected/Protected'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));
const Chat = lazy(() => import('./pages/chat/Chat'));
const Groups = lazy(() => import('./pages/groups/Groups'));
const Dashboard = lazy(() => import('./pages/admin/dashboard/Dashboard'));
const Chats = lazy(() => import('./pages/admin/chats/Chats'));
const Messages = lazy(() => import('./pages/admin/messages/Messages'));
const Users = lazy(() => import('./pages/admin/users/Users'));

export default function App() {
  const { auth } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Loyout />}>
            <Route element={<Suspense fallback={<AppLoyoutSkeleton />}><AppLoyout /></Suspense>}>
              <Route path="" element={<Protected isAuth={auth ? auth.isAuth : false} authAccess={false}><Home /></Protected>} />
              <Route path="home" element={<Navigate to="/" />} />
              <Route path="chat/:id" element={<Protected isAuth={auth ? auth.isAuth : false} authAccess={false}><Chat /></Protected>} />
              <Route path="groups" element={<Protected isAuth={auth ? auth.isAuth : false} authAccess={false}><Groups /></Protected>} />
            </Route>
            <Route path="signup" element={<Suspense fallback={<AuthLoyoutSkeleton />}><Protected isAuth={!(auth ? auth.isAuth : false)}><Signup /></Protected></Suspense>} />
            <Route path="login" element={<Suspense fallback={<AuthLoyoutSkeleton />}><Protected isAuth={!(auth ? auth.isAuth : false)}><Login /></Protected></Suspense>} />
            <Route path="admin" element={<Suspense fallback={<AdminLoyoutSkeleton />}><AdminLoyout /></Suspense>}>
              <Route path="" element={<Protected isAuth={auth ? auth.isAdmin : false} ><Dashboard /></Protected>} />
              <Route path="messages" element={<Protected isAuth={auth ? auth.isAdmin : false} ><Messages /></Protected>} />
              <Route path="chats" element={<Protected isAuth={auth ? auth.isAdmin : false} ><Chats /></Protected>} />
              <Route path="users" element={<Protected isAuth={auth ? auth.isAdmin : false} ><Users /></Protected>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
