import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import SwitchButton from "./SwitchButton";
import LiquidityDeployer from "./LiquidityDeployer";
import LiquidityRemover from "./RemoveLiquidity";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    margin: "auto",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  header: {
    paddingBottom: 0
  }
});

const useStyles = makeStyles(styles);

function Liquidity(props) {
  const classes = useStyles();

  const [deploy, setDeploy] = React.useState(true);

  const deploy_or_remove = (deploy) => {
    if (deploy === true) {
      return <LiquidityDeployer network={props.network} />;
    }
    return <LiquidityRemover network={props.network} />;
  };

  return (
    <div>
      <Container>
        <Card className={{ ...classes.paperContainer, glass: true }}>
          <CardHeader
            className={classes.header}
            title={
              <Typography variant="h5" className={classes.title}>
                <SwitchButton setDeploy={setDeploy} />
              </Typography>
            }
          />
          <CardContent>{deploy_or_remove(deploy)}</CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Liquidity;
