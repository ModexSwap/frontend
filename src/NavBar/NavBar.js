import React, { Component } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@material-ui/core";

class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <AppBar position="start" className="app-bar glass">
        <Toolbar>
          <Avatar size="large" className="logo" style={{ "background-color": "transparent", color: "white" }}>
            M<sub>x</sub>
          </Avatar>

          {MenuItems.map((item, index) => {
            return (
              <Button
                edge="end"
                size="large"
                key={index}
                href={item.url}
              >
                {item.title}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
