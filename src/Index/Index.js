import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./IndexDeployer";
import LiquidityRemover from "./RemoveIndex";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    background: 'color: rgb(31,34,49)',
    maxWidth: 700,
    margin: "auto",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  footer: {
    marginTop: "155px",
  },
});

const useStyles = makeStyles(styles);

function Liquidity(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return <LiquidityDeployer network={props.network}/>;
    }
    return <LiquidityRemover network={props.network}/>;
  };

  return (
    <div>
      <Container>
        <Paper className={classes.paperContainer} style={{backgroundColor: "rgb(32,34,49)"}}>
          <Typography variant="h5" className={classes.title}>
            <SwitchButton setDeploy={setDeploy} />
          </Typography>

          {deploy_or_remove(deploy)}
        </Paper>
      </Container>
    </div>
  );
}

export default Liquidity;
