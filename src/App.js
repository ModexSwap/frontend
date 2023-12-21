import React from "react";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NavBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import { createTheme, ThemeProvider, Grid } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";

import background from "./images/bg.png";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[800],
      contrastText: blue[50],
    },
    secondary: {
      main: blueGrey[900],
      contrastText: blueGrey[50],
    }
  },
});

const App = () => {
  return (
    <div id="app" style={{ backgroundImage: `url(${background})` }}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <React.Fragment>
                <NavBar />
                <Grid style={{height: 'calc(100% - 66px)', 'margin': '120px 0 0 120px'}} container>
                  <Grid item>
                    <Route exact path="/">
                      <CoinSwapper network={network} />
                    </Route>

                    <Route exact path="/liquidity">
                      <Liquidity network={network} />
                    </Route>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
