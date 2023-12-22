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
const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #17081E, #282b30)'
};
class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav position="start" className="container-fluid app-bar glass py-2" style={gradientStyle}>
        <div className="row m-0 p-0">
          <a className="navbar col-1" href="/">
            <img src="logo.png" height="24"/>
          </a>
          <div className="col"> {MenuItems.map((item, index) => {
              return (
                  <Button
                      edge="end"
                      size="large"
                      key={index}
                      href={item.url}
                      style={{ color: '#A09EA1' }}
                  >
                    {item.title}
                  </Button>
              );
            })}</div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
