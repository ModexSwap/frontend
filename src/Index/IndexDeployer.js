import React, { useEffect } from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useSnackbar } from "notistack";
import {
  getBalanceAndSymbol,
  getReserves,
} from "../ethereumFunctions";

import { addLiquidity, quoteAddLiquidity } from "./IndexFunctions";

import CoinField from "../CoinSwapper/CoinField";
import CoinDialog from "../CoinSwapper/CoinDialog";
import LoadingButton from "../Components/LoadingButton";
import WrongNetwork from "../Components/wrongNetwork";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    width: "40%",
    overflow: "wrap",
    background: "linear-gradient(45deg, #ff0000 30%, #FF8E53 90%)",
    color: "white",
  },
  fullWidth: {
    width: "100%",
  },
  values: {
    width: "50%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  hr: {
    width: "100%",
  },
  balance: {
    padding: theme.spacing(1),
    overflow: "wrap",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.4),
  },
});

const useStyles = makeStyles(styles);

function LiquidityDeployer(props) {
   // Called when the dialog window for coin1 exits
   const onToken1Selected = (address) => {
    // Getting some token data is async, so we need to wait for the data to return, hence the promise
    getBalanceAndSymbol(
      props.network.account,
      address,
      props.network.provider,
      props.network.signer,
      props.network.weth.address,
      props.network.coins
      ).then((data) => {
        console.log("data.balance: ", data.balance)
      setCoin1({
        address: address,
        symbol: data.symbol,
        balance: data.balance,
      });
    });
  };

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [wrongNetworkOpen, setwrongNetworkOpen] = React.useState(false);

  // Stores data about their respective coin
  const [coin1, setCoin1] = React.useState({
    address: undefined,
    symbol: undefined,
    balance: undefined,
  });

  // Stores the current value of their respective text box
  const [field1Value, setField1Value] = React.useState("");

  // Controls the loading button
  const [loading, setLoading] = React.useState(false);

  // These functions take an HTML event, pull the data out and puts it into a state variable.
  const handleChange = {
    field1: (e) => {
      setField1Value(e.target.value);
    },
  };


  // Determines whether the button should be enabled or not
  const isButtonEnabled = () => {

    const parsedInput1 = parseFloat(field1Value);
    return (
      coin1.address &&
      parsedInput1 !== NaN &&
      0 < parsedInput1 &&
      parsedInput1 <= coin1.balance
    );
  };



  const deploy = () => {
    console.log("Attempting to deploy liquidity...");
    setLoading(true);

    addLiquidity(
      coin1.address,
      field1Value,
      '0',
      '0',
      props.network.router,
      props.network.account,
      props.network.signer
    )
      .then(() => {
        setLoading(false);

        // If the transaction was successful, we clear to input to make sure the user doesn't accidental redo the transfer
        setField1Value("");
        enqueueSnackbar("Deployment Successful", { variant: "success" });
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("Deployment Failed (" + e.message + ")", {
          variant: "error",
          autoHideDuration: 10000,
        });
      });
  };


  useEffect(() => {
    // read the first coin from the network only when available
    if (props.network.coins.length > 0){
      onToken1Selected(props.network.coins[0].address)
    }
  }, [props.network.coins]);
  
 


  return (
    <div>
      {/* Liquidity deployer */}
      <Typography variant="h5" className={classes.title}></Typography>

     
      <WrongNetwork
        open={wrongNetworkOpen}
      />

      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12} className={classes.fullWidth}>
          <CoinField
            activeField={true}
            value={field1Value}
            onClick={() => {}}
            onChange={handleChange.field1}
            symbol={coin1.symbol !== undefined ? coin1.symbol : "Select"}
            balance={coin1.balance}
            hideSymbol={true}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        className={classes.balance}
      >
        <hr className={classes.hr} />
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <LoadingButton
          loading={loading}
          valid={isButtonEnabled()}
          success={false}
          fail={false}
          onClick={deploy}
        >
          <AccountBalanceIcon className={classes.buttonIcon} />
          Deploy
        </LoadingButton>
      </Grid>
    </div>
  );
}

export default LiquidityDeployer;
