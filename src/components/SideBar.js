import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";

import Avatar from "@mui/material/Avatar";

import logo2 from "../assets/logo2.png";
import profile from "../assets/1.png";

// Material Icons Imports
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

let listOfIcons = [
  <NotificationsIcon />,
  <SchoolIcon />,
  <SettingsSuggestIcon style={{ color: "gray" }} />,
  <AssignmentIndIcon style={{ color: "gray" }} />,
  <StackedLineChartIcon style={{ color: "gray" }} />,
];

console.log(listOfIcons[0]);
console.log(<NotificationsIcon />);

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="relative" open={open}>
        <Toolbar style={{ backgroundColor: "black" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#1f1f1f" }}>
          <IconButton
            onClick={handleDrawerClose}
            style={{
              zIndex: "20",
              position: "absolute",
              color: "white",
              display: open ? "block" : "none",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, width: "100%" }}
          >
            <img
              src={logo2}
              alt="Logo"
              style={{
                width: "120px",
                height: "50px",
                display: open ? "block" : "none",
              }}
            />
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <div
          style={{
            height: `calc(100vh - 56px)`,
            backgroundColor: "#1f1f1f",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-between",
          }}
          className="ziko"
        >
          <div>
            <div style={{ textAlign: "left", paddingLeft: "15px" }}>
              <img
                src={logo2}
                alt="Logo"
                style={{
                  width: "40px",
                  height: "40px",
                  display: open ? "none" : "block",
                }}
              />
            </div>
            <List style={{}}>
              {["Alerts", "Training", "Automation", "Portfolio", "Trading"].map(
                (text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block", color: "white" }}
                    className={`sideList${index}`}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {/* {index % 2 === 0 ? <NotificationsIcon /> : <SchoolIcon />} */}
                        {listOfIcons[index]}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </div>

          <div style={{ color: "white" }}>
            <div style={{ position: "relative", marginBottom: "40px" }}>
              <Badge
                badgeContent={6}
                color="success"
                style={{
                  position: "absolute",
                  left: "20px",
                  display: open ? "none" : "block",
                }}
              >
                <NotificationsIcon color="accent" />
              </Badge>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
              }}
            >
              <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                <img
                  src={profile}
                  alt="Profile-pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
              <div style={{ marginLeft: "10px" }}>
                <h5 style={{ padding: "0px", margin: "0px" }}>Mahmoud Ragab</h5>
                <h6
                  style={{
                    padding: "0px",
                    margin: "0px",
                    textAlign: "left",
                    color: "grey",
                  }}
                >
                  Beginner
                </h6>
              </div>
            </div>
            <p
              style={{
                color: "gray",
                marginBottom: "30px",
                visibility: open ? "visible" : "hidden",
              }}
            >
              Street suite. 2.0
            </p>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
