import { AppBar, Badge, IconButton, Stack, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { IoSearchOutline as SearchIcon, IoAdd as AddIcon, IoNotificationsSharp as NotificationsIcon, IoChatbubbleEllipsesOutline as ChatIcon } from "react-icons/io5";
import { MdGroups as GroupsIcon } from "react-icons/md";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import { RxAvatar as ProfileIcon } from "react-icons/rx";
import { useTheme } from '@mui/material/styles';
import { BlueColor } from '../../../constants/color';
import { useAuth } from '../../../context/authContext';
import { useLocation, useNavigate } from 'react-router-dom';

export type NavbarProps = {
  toggalSearch: () => void;
  toggalGroups: () => void;
  toggalNotifications: () => void;
}
export function Navbar({ toggalSearch, toggalGroups, toggalNotifications }: NavbarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const notification = 100;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: BlueColor, height: "4rem" }} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '0.9rem', sm: '1.3rem' } }}
          onClick={() => navigate("/")}
        >
          Chat App
        </Typography>
        <Stack direction={'row'} spacing={isMobile ? 1 : 2}>
          {isTablet && <Tooltip title="profile">
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label="profile" color="inherit">
              <ProfileIcon fontSize={isMobile ? 'default' : 'large'} />
            </IconButton>
          </Tooltip>}
          <Tooltip title="add friends">
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label="add friends" color="inherit"
              onClick={toggalSearch}
            >
              <SearchIcon fontSize={isMobile ? 'default' : 'large'} />
            </IconButton>
          </Tooltip>
          <Tooltip title="create groups">
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label="create groups" color="inherit"
              onClick={toggalGroups}
            >
              <AddIcon fontSize={isMobile ? 'default' : 'large'} />
            </IconButton>
          </Tooltip>
          <Tooltip title={location.pathname === "/groups" ? 'chats' : 'groups'}>
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label={location.pathname === "/groups" ? 'chats' : 'groups'} color="inherit"
              onClick={() => navigate(`/${location.pathname === "/groups" ? '' : 'groups'}`)}
            >
              {location.pathname === "/groups" ? <ChatIcon fontSize={isMobile ? 'default' : 'large'} /> : <GroupsIcon fontSize={isMobile ? 'default' : 'large'} />}
            </IconButton>
          </Tooltip>
          <Tooltip title="notification">
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label={`${notification} new notifications`} color="inherit"
              onClick={toggalNotifications}
            >
              {!notification ?
                <NotificationsIcon fontSize={isMobile ? 'default' : 'large'} />
                :
                <Badge badgeContent={notification} color="error" max={99} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                  <NotificationsIcon fontSize={isMobile ? 'default' : 'large'} />
                </Badge>}
            </IconButton>
          </Tooltip>
          <Tooltip title="logOut">
            <IconButton size={isMobile ? 'medium' : 'large'} aria-label="logOut" color="inherit"
              onClick={logout}
            >
              <LogOutIcon fontSize={isMobile ? 'default' : 'large'} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
