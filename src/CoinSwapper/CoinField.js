import React from "react";
import { Fab, Grid, InputBase, makeStyles, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import * as COLORS from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    minHeight: "80px",
    backgroundColor: "#161522",
    borderRadius: theme.spacing(2),
    borderColor: COLORS.blueGrey[300],
    borderWidth: "1px",
    borderStyle: "solid",
  },
  container_input: {
    padding: theme.spacing(1),
    minHeight: "68px",
    backgroundColor: "#161522",
    color:"#A09EA1",
    borderRadius: theme.spacing(2),
    borderColor: COLORS.blueGrey[300],
    borderWidth: "1px",
    borderStyle: "solid",
    marginLeft: "50%",
    textAlign: "right",
  },
  container_blank: {
    padding: theme.spacing(1),
    minHeight: "80px",
    borderRadius: theme.spacing(2),
  },
  grid: {
    height: "60px",
  },
  fab: {
    zIndex: "0",
  },
  input: {
    ...theme.typography.h5,
    width: "100%",
    color:"#A09EA1",
  },
  inputBase: {
    textAlign: "right",
  },
}));

CoinField.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  activeField: PropTypes.bool.isRequired,
};

export function RemoveLiquidityField1(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const { onClick, symbol, value, onChange, activeField } = props;
  return (
    <div className={classes.container_blank}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        {/* Button */}
        <Grid item xs={3}>
          <Button
            size="small"
            variant="extended"
            backgroundColor="secondary"
            onClick={onClick}
            className={classes.fab}
            endIcon={<ExpandMoreIcon />}
          >
            {symbol}
          </Button>
        </Grid>
        {/* Text Field */}
        <Grid item xs={9}>
          <InputBase
            value={value}
            onChange={onChange}
            placeholder="0.0"
            disabled={!activeField}
            classes={{
              root: classes.container_input,
              input: classes.inputBase,
            }}
          />
        </Grid>
        {/* </div> */}
      </Grid>
    </div>
  );
}

export function RemoveLiquidityField2(props) {
  // This component is used to selecting a coin and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const { onClick, symbol } = props;

  return (
    <div className={classes.container_blank}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        {/* Button */}
        <Grid item xs={3}>
          <Button
            size="small"
            variant="extended"
            onClick={onClick}
            className={classes.fab}
          >
            {symbol}
            <ExpandMoreIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default function CoinField(props) {
  // This component is used to selecting a token and entering a value, the props are explained below:
  //      onClick - (string) => void - Called when the button is clicked
  //      symbol - string - The text displayed on the button
  //      value - string - The value of the text field
  //      onChange - (e) => void - Called when the text field changes
  //      activeField - boolean - Whether text can be entered into this field or not

  const classes = useStyles();
  const {
    onClick,
    symbol,
    value,
    onChange,
    activeField,
    balance,
    hideSymbol = false,
  } = props;

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}                  color="white"

      >
        {/* Button */}
        {props.hideSymbol ? (
          <Grid item xs={3}></Grid>
        ) : (
          <Grid item xs={3}>
            <Button
              size="small"
              variant="extended"
              onClick={onClick}
              style={{ color:"white"}}
              className={classes.fab}
              endIcon={<ExpandMoreIcon />}
            >
              {symbol}
            </Button>
          </Grid>
        )}
        <Grid item xs={9}>
          <InputBase
            style={{ color:"white"}}
            color="white"
            value={value}
            onChange={onChange}
            placeholder={balance ? balance : "0.0"}
            disabled={!activeField}
            classes={{ root: classes.input, input: classes.inputBase }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
