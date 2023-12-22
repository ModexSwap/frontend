import React from "react";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NavBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import MainPage from "./MainPage/MainPage";
import Staking from "./Staking/Staking";
import Loans from "./Loans/Loans";
import { createTheme, ThemeProvider, Grid } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";
import background from "./images/swap-bg.webp";
import Index from "./Index/Index";
const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #17081E, #282b30)'
};
const App = () => {
  return (
    <div id="app" className="container-fluid bg-gradient-custom" style={gradientStyle} >
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider >
          <Web3Provider
              render={(network) => (
                  <React.Fragment>
                    <NavBar />
                    <div className="row pt-5">
                        <div className="col"></div>
                      <div className="col">
                        <Route exact path="/" component={() => <MainPage network={network} />} />

                        <Route exact path="/swap" component={() => <CoinSwapper network={network} />} />
                        <Route exact path="/liquidity" component={() => <Liquidity network={network} />} />
                        <Route exact path="/buy-index" component={() => <Index network={network} />} />
                      <Route exact path="/staking" component={() => <Staking network={network} />} />
                      <Route exact path="/loans" component={() => <Loans network={network} />} />


                      </div>
                        <div className="col"></div>

                    </div>
                  </React.Fragment>
              )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
