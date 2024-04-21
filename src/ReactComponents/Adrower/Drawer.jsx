import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import GitHubIcon from "@mui/icons-material/GitHub";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";

export default function SwipeableTemporaryDrawer({children}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" bg-stone-300 h-screen"
    >
      <List className="h-screen">
        {[
          {
            text: "profile",
            a: "/profile",
            aComponent: <PersonIcon className=" text-cyan-700" />,
          },
          {
            text: "saves",
            a: "/saves",
            aComponent: <BookmarkAddedIcon />,
          },
          {
            text: "buy",
            a: "/buy",
            aComponent: <ShoppingCartIcon className=" text-blue-900" />,
          },
          {
            text: "sells",
            a: "/sells",
            aComponent: <SellIcon className=" text-red-900" />,
          },
          {
            text: "GitHub",
            a: "https://github.com/SandhanMeher",
            aComponent: <GitHubIcon className=" text-black" />,
          },
        ].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <Link to={text.a}>
              <ListItemButton>
                <ListItemIcon>{text.aComponent}</ListItemIcon>
                <ListItemText primary={text.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem key="a" disablePadding className=" bg-red-900 pl-6 text-white rounded-full mt-72">
            <a href="">
              <ListItemButton >
                <ListItemIcon><PowerSettingsNewIcon className=" text-white"/></ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </a>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"} > 
        <Button onClick={toggleDrawer("right", true)}>{children}</Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
