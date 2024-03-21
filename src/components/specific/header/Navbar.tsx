import { AppBar, Badge, IconButton, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { IoSearchOutline as SearchIcon, IoAdd as AddIcon, IoNotificationsSharp as NotificationsIcon } from "react-icons/io5";
import { MdGroups as GroupsIcon } from "react-icons/md";
import { FiLogOut as LogOutIcon } from "react-icons/fi";
import { RxAvatar as ProfileIcon } from "react-icons/rx";
import { useTheme } from '@mui/material/styles';
import { BlueColor } from '../../../constants/color';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: BlueColor }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chat App
        </Typography>
        <Stack direction={'row'} spacing={isMobile ? 1 : 2}>
          {isTablet && <IconButton size={isMobile ? 'medium' : 'large'} aria-label="profile" color="inherit">
            <ProfileIcon fontSize={isMobile ? 'default' : 'large'} />
          </IconButton>}
          <IconButton size={isMobile ? 'medium' : 'large'} aria-label="add friends" color="inherit">
            <SearchIcon fontSize={isMobile ? 'default' : 'large'} />
          </IconButton>
          <IconButton size={isMobile ? 'medium' : 'large'} aria-label="create groups" color="inherit">
            <AddIcon fontSize={isMobile ? 'default' : 'large'} />
          </IconButton>
          <IconButton size={isMobile ? 'medium' : 'large'} aria-label="groups" color="inherit">
            <GroupsIcon fontSize={isMobile ? 'default' : 'large'} />
          </IconButton>
          <IconButton size={isMobile ? 'medium' : 'large'} aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon fontSize={isMobile ? 'default' : 'large'} />
            </Badge>
          </IconButton>
          <IconButton size={isMobile ? 'medium' : 'large'} aria-label="logOut" color="inherit">
            <LogOutIcon fontSize={isMobile ? 'default' : 'large'} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
